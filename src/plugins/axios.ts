import axios from 'axios'
import { stringify } from 'qs'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.paramsSerializer = {
  serialize: (params) => stringify(params, { arrayFormat: 'repeat' })
}
axios.defaults.formSerializer = {
  indexes: null
}

axios.defaults.withCredentials = true

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  switch (error.response.status) {
    case 401:
      window.location.href = "http://192.168.39.68:9528/login"
      break;
    default:
      break;
  }

  return Promise.reject(error);
})

export default axios