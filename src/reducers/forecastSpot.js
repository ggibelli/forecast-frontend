import forecastService from '../services/forecasts'

const initialState = {
  data: {},
  isLoading: false,
  errorMessage: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FORECAST_START':
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      }
    case 'FETCH_FORECAST_FAIL':
      return {
        ...state,
        isLoading: false,
        errorMessage: 'Cannot load the forecast',
      }
    case 'FETCH_FORECAST_SUCCESS':
      return {
        ...state,
        data: action.data,
        isLoading: false,
        errorMessage: '',
      }
    default:
      return state
  }
}

const fetchForecastStart = () => async (dispatch) => {
  dispatch({
    type: 'FETCH_FORECAST_START',
  })
}

const fetchForecastSuccess = (data) => async (dispatch) => {
  dispatch({
    type: 'FETCH_FORECAST_SUCCESS',
    data,
  })
}

const fetchForecastFail = (error) => async (dispatch) => {
  dispatch({
    type: 'FETCH_FORECAST_FAIL',
    error,
  })
}

export const fetchForecast = (id) => async (dispatch) => {
  dispatch(fetchForecastStart())
  try {
    const data = await forecastService.getForecast(id)
    dispatch(fetchForecastSuccess(data))
  } catch (error) {
    dispatch(fetchForecastFail(error))
  }
}

export default reducer
