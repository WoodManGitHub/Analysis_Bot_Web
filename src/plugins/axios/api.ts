import http from './axios'
export default {
  get: (type = '', serverID = '') => http.Get(`/api/${type}/${serverID}`),
  verifyToken: (token = '') => http.Get(`/verify/${token}`)
}
