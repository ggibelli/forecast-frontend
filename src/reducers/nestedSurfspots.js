import surfspotService from '../services/surfspots'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'NEW_SPOT_NESTED':
      return action.data.isSecret ? [...state] : insertSpot(state, action)
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

const insertSpot = (array, action) => {
  const findContinentIndex = (element) =>
    element.name === action.data.continent.name
  const findCountryIndex = (element) =>
    element.name === action.data.country.name
  const findRegionIndex = (element) => element.name === action.data.region.name
  const newArray = array.slice()
  const continentIndex = array.findIndex(findContinentIndex)
  const countryIndex = array[continentIndex].countries.findIndex(
    findCountryIndex,
  )
  const regionIndex = array[continentIndex].countries[
    countryIndex
  ].regions.findIndex(findRegionIndex)
  newArray[continentIndex].countries[countryIndex].regions[
    regionIndex
  ].surfSpots.push({ name: action.data.name, id: action.data.id })
  return newArray
}

export default reducer
