import http from './axios'
export default {
  get: (type = '', serverID = '', start = '', end = '') => http.Get((type === 'custom') ? `/api/${type}/${serverID}?start=${start}&end=${end}` : `/api/${type}/${serverID}`),
  verifyToken: (token = '') => http.Get(`/api/verify/${token}`)
}
