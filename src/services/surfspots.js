import axios from 'axios'
import storage from '../utils/storage'

const baseUrl = '/api'

const setConfig = () => ({
  headers: { Authorization: `bearer ${storage.loadUser().token}` },
})

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newObject) => {
  const response = await axios.post(
    `${baseUrl}/surfspots`,
    newObject,
    setConfig(),
  )
  return response.data
}

const update = async (newObject) => {
  console.log(newObject)
  const response = await axios.put(
    `${baseUrl}/surfspots/${newObject.id}`,
    newObject,
    setConfig(),
  )
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(
    `${baseUrl}/surfspots/delete/${id}`,
    setConfig(),
  )
  return response.data
}

/*
const removeMultiple = async (ids) => {
  const response = await axios.delete(`${baseUrl}/surfspots/delete/`, setConfig())
  return response.data
} */

const getAllForSearch = async () => {
  const response = await axios.get(`${baseUrl}/surfspots`)
  return response.data
}

const getSingleSpot = async (id) => {
  const response = await axios.get(`${baseUrl}/surfspots/${id}`)
  return response.data
}

export default {
  getAll,
  getSingleSpot,
  getAllForSearch,
  create,
  update,
  remove,
}
