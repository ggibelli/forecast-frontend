import mapsService from '../services/maps'




const reducer = (state = null, action) => {
  switch (action.type) {
    case 'CONTINENT':
      return action.data
    case 'COUNTRY':
      return action.data
    case 'REGION':
      return action.data
    default:
      return state
  }
}

export const getContinentData = () => async (dispatch) => {
  const data = await mapsService.getContinent()
  dispatch({
    type: 'CONTINENT',
    data,
  })
}

export const GetCountryData = () => async (dispatch) => {
  const data = await mapsService.getCountry()
  dispatch({
    type: 'COUNTRY',
    data,
  })
}

export const GetRegionData = () => async (dispatch) => {
  const data = await mapsService.getRegion()
  dispatch({
    type: 'REGION',
    data,
  })
}

export default reducer
