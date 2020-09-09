import surfspotService from '../services/surfspots'

const newSpot = async (spot) => {
  try {
    const data = await surfspotService.create(spot)
    return {
      name: data.name,
      continent: data.continent,
      country: data.country,
      region: data.region,
      id: data.id,
      isSecret: data.isSecret,
    }
  } catch (error) {
    return {
      error: error.response.data.error,
    }
  }
}

const updateSpot = async (spot) => {
  try {
    const data = await surfspotService.update(spot)
    return {
      name: data.name,
      continent: data.continent,
      country: data.country,
      region: data.region,
      id: data.id,
      isSecret: data.isSecret,
    }
  } catch (error) {
    return {
      error: error.response.data.error,
    }
  }
}

const deleteSpot = async (id) => {
  try {
    const success = await surfspotService.remove(id)
    return success
  } catch (error) {
    return {
      error: error.response.data.error,
    }
  }
}

const checkValidityName = (name) => {
  if (name.length > 2 || !name) return true
  return false
}

const latitudeIsValid = (latitude) => {
  if (!latitude) return true
  return /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(
    latitude,
  )
}

const longitudeIsValid = (longitude) => {
  if (!longitude) return true
  return /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(
    longitude,
  )
}

const directions = [
  'North',
  'NorthEast',
  'East',
  'SouthEast',
  'South',
  'SouthWest',
  'West',
  'NorthWest',
]
const tidesMovement = ['Rising tide', 'Falling tide']
const tides = ['High tide', 'Mid tide', 'Low tide']
const dangers = [
  'Rocks',
  'Sharks',
  'Localism',
  'Pollution',
  'man-made danger (buoys etc..)',
  'Urchins',
  'Rips',
]

export default {
  newSpot,
  updateSpot,
  deleteSpot,
  checkValidityName,
  latitudeIsValid,
  longitudeIsValid,
  directions,
  tidesMovement,
  tides,
  dangers,
}
