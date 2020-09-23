import userService from '../services/users'

const initialState = {
  starredSpots: [],
  createdSpots: [],
  username: '',
  firstName: '',
  email: '',
  id: '',
}

const reducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case 'PROFILE':
      return action.data
    case 'ADD_STAR':
      return { ...state, starredSpots: state.starredSpots.concat(action.data) }
    case 'REMOVE_STAR':
      return {
        ...state,
        starredSpots: state.starredSpots.filter(
          (spot) => spot.id !== action.data,
        ),
      }
    case 'REMOVE_CREATED':
      return {
        ...state,
        createdSpots: state.createdSpots.filter(
          (spot) => spot.id !== action.data,
        ),
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
  dispatch({
    type: 'ADD_STAR',
    data,
  })
}

export const removeStarSpot = (id, spot) => async (dispatch) => {
  const data = await userService.removeStarred(id, spot)
  dispatch({
    type: 'REMOVE_STAR',
    data,
  })
}

export const removeCreated = (data) => ({
  type: 'REMOVE_CREATED',
  data,
})

export default reducer
