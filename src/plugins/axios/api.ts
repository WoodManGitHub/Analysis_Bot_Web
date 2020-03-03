import http from './axios'
export default {
  get: (type = '', serverID = '') => http.Get(`/api/${type}/${serverID}`)
}
