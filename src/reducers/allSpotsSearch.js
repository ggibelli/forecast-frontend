import surfspotService from '../services/surfspots'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_SEARCH':
      return action.data
    case 'NEW_SPOT_SEARCH':
      return action.data.isSecret ? [...state] : [...state, action.data]
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

export const createSurfspot = (data) => async (dispatch) => {
  dispatch({
    type: 'NEW_SPOT_SEARCH',
    data,
  })
}

export default reducer
