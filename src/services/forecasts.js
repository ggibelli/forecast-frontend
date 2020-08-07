import axios from 'axios'

const baseUrl = '/api/forecast/'

const getForecast = async (id) => {
  const response = await axios.get(`${baseUrl}${id}`)
  return response.data
}

export default { getForecast }
