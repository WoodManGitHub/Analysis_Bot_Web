import api from './api'
import _Vue from 'vue'

const Plugin = {
  install: (Vue: typeof _Vue) => {
    Object.defineProperties(Vue.prototype, {
      axios: {
        get () {
          return api
        },
        verifyToken () {
          return api
        }
      },
      $axios: {
        get () {
          return api
        },
        verifyToken () {
          return api
        }
      }
    })
  }
}

export default Plugin
