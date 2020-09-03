import surfspotService from '../services/surfspots'

const reducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'INIT_SEARCH':
      return action.data
    case 'NEW_SPOT':
      return [...state]
    default:
      return state
  }
}

export const initializeSearch = () => async (dispatch) => {
  const data = await surfspotService.getAllForSearch()
  dispatch({
    type: 'INIT_SEARCH',
    data,
  })
}

export const createSurfspot = (newSpot) => async (dispatch) => {
  const data = await surfspotService.create(newSpot)
  dispatch({
    type: 'NEW_SPOT',
    data,
  })
}

export default reducer
