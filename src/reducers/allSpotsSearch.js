import surfspotService from '../services/surfspots'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_SEARCH':
      return action.data
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

export default reducer
