import surfspotService from '../services/surfspots'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.data
    default:
      return state
  }
}

export const initializeSpots = () => async (dispatch) => {
  const data = await surfspotService.getAll()
  dispatch({
    type: 'INIT',
    data,
  })
}

export default reducer
