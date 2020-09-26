import surfspotService from '../services/surfspots'

export const initialState = {
  data: {},
  isLoading: false,
  errorMessage: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SPOT_START':
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      }
    case 'FETCH_SPOT_FAIL':
      return {
        ...state,
        isLoading: false,
        errorMessage: 'Cannot find the spot',
      }
    case 'FETCH_SPOT_SUCCESS':
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

const fetchSpotStart = () => async (dispatch) => {
  dispatch({
    type: 'FETCH_SPOT_START',
  })
}

const fetchSpotSuccess = (data) => async (dispatch) => {
  dispatch({
    type: 'FETCH_SPOT_SUCCESS',
    data,
  })
}

const fetchSpotFail = (error) => async (dispatch) => {
  dispatch({
    type: 'FETCH_SPOT_FAIL',
    error,
  })
}

export const fetchSpot = (id) => async (dispatch) => {
  dispatch(fetchSpotStart())
  try {
    const data = await surfspotService.getSingleSpot(id)
    dispatch(fetchSpotSuccess(data))
  } catch (error) {
    dispatch(fetchSpotFail(error))
  }
}

export default reducer
