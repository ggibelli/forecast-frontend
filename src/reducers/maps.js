import mapsService from '../services/maps'

const initialState = {
  data: {},
  isLoading: false,
  errorMessage: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MAP_START':
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      }
    case 'FETCH_MAP_FAIL':
      return {
        ...state,
        isLoading: false,
        errorMessage: 'Cannot load the map',
      }
    case 'FETCH_MAP_SUCCESS':
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

const fetchMapStart = () => async (dispatch) => {
  dispatch({
    type: 'FETCH_MAP_START',
  })
}

const fetchMapSuccess = (data) => async (dispatch) => {
  dispatch({
    type: 'FETCH_MAP_SUCCESS',
    data,
  })
}

const fetchMapFail = (error) => async (dispatch) => {
  dispatch({
    type: 'FETCH_MAP_FAIL',
    error,
  })
}

export const fetchMap = (id, area) => async (dispatch) => {
  dispatch(fetchMapStart())
  try {
    const data = await mapsService.getMapsInfo(id, area)
    dispatch(fetchMapSuccess(data))
  } catch (error) {
    dispatch(fetchMapFail(error))
  }
}

export default reducer
