import mapsService from '../services/maps'

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_MAP':
      return action.data
    case 'ERROR_MAP':
      return action.error
    default:
      return state
  }
}

export const getMapData = (id, area) => async (dispatch) => {
  try {
    const data = await mapsService.getMapsInfo(id, area)
    dispatch({
      type: 'GET_MAP',
      data,
    })
  } catch (error) {
    dispatch({
      type: 'ERROR_MAP',
      error,
    })
  }
}

export default reducer
