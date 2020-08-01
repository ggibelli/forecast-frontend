import axios from 'axios'

const baseUrl = '/api'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getSingleSpot = async (id) => {
  const response = await axios.get(`${baseUrl}/surfspots/${id}`)
  return response.data
}

export default { getAll, getSingleSpot }
