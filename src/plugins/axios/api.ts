import http from './axios'
export default {
  day: (serverID = '') => http.Get(`http://localhost:8787/api/day/${serverID}`),
  month: (serverID = '') => http.Get(`http://localhost:8787/api/month/${serverID}`),
  all: (serverID = '') => http.Get(`http://localhost:8787/api/all/${serverID}`)
}
