import surfspotService from '../services/surfspots'

const reducer = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case 'VIEW_SPOT':
      return action.data
    default:
      return state
  }
}

export const initializeSpots = (id) => async (dispatch) => {
  const data = await surfspotService.getSingleSpot(id)
  dispatch({
    type: 'VIEW_SPOT',
    data,
  })
}

export default reducer
