import http from './axios'
export default {
  get: (type = '', serverID = '') => http.Get(`http://localhost:8788/api/${type}/${serverID}`)
}
