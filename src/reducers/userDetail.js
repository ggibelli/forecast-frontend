import userService from '../services/users'

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'PROFILE':
      return action.data
    case 'ADD_STAR':
      return { ...state, starredSpots: state.starredSpots.concat(action.data) }
    case 'REMOVE_STAR':
      return {
        ...state,
        starredSpots: action.data,
      }
    case 'REMOVE_CREATED':
      return {
        ...state,
        createdSpots: state.createdSpots.filter((spot) => spot.id !== action.data),
      }
    default:
      return state
  }
}

export const getProfile = (id) => async (dispatch) => {
  const data = await userService.getUser(id)
  dispatch({
    type: 'PROFILE',
    data,
  })
}

export const addStarSpot = (id, spot) => async (dispatch) => {
  const data = await userService.addStarred(id, spot)
  const { starredSpots } = data
  dispatch({
    type: 'ADD_STAR',
    data: starredSpots.map((starred) => starred.id),
  })
}

export const removeStarSpot = (id, spot) => async (dispatch) => {
  const data = await userService.removeStarred(id, spot)
  const { starredSpots } = data
  dispatch({
    type: 'REMOVE_STAR',
    data: starredSpots.map((starred) => starred.id),
  })
}

export const removeCreated = (data) => ({
  type: 'REMOVE_CREATED',
  data,
})

export default reducer
