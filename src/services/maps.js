import axios from 'axios'

const baseUrl = '/api'

const getMapsInfo = async (id, area) => {
  const response = await axios.get(`${baseUrl}/${area}/${id}`)
  return response.data
}

export default { getMapsInfo }
