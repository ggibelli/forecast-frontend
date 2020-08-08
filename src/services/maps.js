import axios from 'axios'

const baseUrl = '/api'

const getContinent = async (id) => {
  const response = await axios.get(`${baseUrl}/continent/${id}`)
  return response.data
}

const getCountry = async (id) => {
  const response = await axios.get(`${baseUrl}/country/${id}`)
  return response.data
}

const getRegion = async (id) => {
  const response = await axios.get(`${baseUrl}/region/${id}`)
  return response.data
}

export default { getContinent, getCountry, getRegion }
