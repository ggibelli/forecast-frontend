import surfspotService from '../services/surfspots'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_SEARCH':
      return state.concat(action.data)
    case 'NEW_SPOT_SEARCH':
      return action.data.isSecret ? [...state] : [...state, action.data]
    case 'UPDATE_SPOT_SEARCH':
      return action.data.isSecret
        ? state.filter((spot) => spot.id !== action.data.id)
        : [...state, action.data]
    case 'REMOVE_SPOT_SEARCH':
      return state.filter((spot) => spot.id !== action.data)
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

export const createSurfspot = (data) => ({
  type: 'NEW_SPOT_SEARCH',
  data,
})

export const updateSurfspot = (data) => ({
  type: 'UPDATE_SPOT_SEARCH',
  data,
})

export const removeSurfspot = (data) => ({
  type: 'REMOVE_SPOT_SEARCH',
  data,
})

export default reducer
