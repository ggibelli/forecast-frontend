import axios from 'axios'
import storage from '../utils/storage'

const baseUrl = '/api/users'

const setConfig = () => ({
  headers: { Authorization: `bearer ${storage.loadUser().token}` },
})

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const addStarred = async (id, spot) => {
  const response = await axios.put(
    `${baseUrl}/${id}/starred/add`,
    { id: spot },
    setConfig(),
  )
  return response.data
}

const removeStarred = async (id, spot) => {
  const response = await axios.put(
    `${baseUrl}/${id}/starred/remove`,
    { id: spot },
    setConfig(),
  )
  return response.data
}

export default {
  getAll,
  getUser,
  addStarred,
  removeStarred,
}
