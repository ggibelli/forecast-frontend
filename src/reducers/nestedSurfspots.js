import surfspotService from '../services/surfspots'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'NEW_SPOT_NESTED':
      return action.data.isSecret ? [...state] : insertSpot(state, action)
    case 'UPDATE_SPOT_NESTED':
      return action.data.isSecret
        ? removeSpot(state, action)
        : insertSpot(state, action)
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

export const createSurfspotMenu = (data) => async (dispatch) => {
  dispatch({
    type: 'NEW_SPOT_NESTED',
    data,
  })
}

export const updateSurfspotMenu = (data) => async (dispatch) => {
  dispatch({
    type: 'UPDATE_SPOT_NESTED',
    data,
  })
}

const insertSpot = (array, action) => {
  const newArray = array.slice()
  const continentIndex = array.findIndex(
    (element) => element.name === action.data.continent.name,
  )
  const countryIndex = array[continentIndex].countries.findIndex(
    (element) => element.name === action.data.country.name,
  )
  const regionIndex = array[continentIndex].countries[
    countryIndex
  ].regions.findIndex((element) => element.name === action.data.region.name)
  newArray[continentIndex].countries[countryIndex].regions[
    regionIndex
  ].surfSpots.push({ name: action.data.name, id: action.data.id })
  return newArray
}

const removeSpot = (array, action) => {
  const newArray = array.slice()
  const continentIndex = array.findIndex(
    (element) => element.name === action.data.continent.name,
  )
  const countryIndex = array[continentIndex].countries.findIndex(
    (element) => element.name === action.data.country.name,
  )
  const regionIndex = array[continentIndex].countries[
    countryIndex
  ].regions.findIndex((element) => element.name === action.data.region.name)
  const spotIndex = array[continentIndex].countries[countryIndex].regions[
    regionIndex
  ].surfSpots.findIndex((element) => element.id === action.data.id)
  newArray[continentIndex].countries[countryIndex].regions[
    regionIndex
  ].surfSpots.splice(spotIndex, 1)

  console.log(newArray)
  return newArray
}

export default reducer
