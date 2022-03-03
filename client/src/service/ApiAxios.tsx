import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL //URL servidor

const apiAxios = axios.create({
  baseURL
})

export default apiAxios