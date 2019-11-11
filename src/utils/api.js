import axios from 'axios'
import qs from 'qs'
import { host } from './config'

const service = axios.create({
  baseURL: host,
  timeout: 20000
})

service.interceptors.request.use(
  config => {
    if (config.method.toUpperCase() === 'POST' || config.method.toUpperCase() === 'DELETE') {
      if (config.data) {
        config.data = JSON.stringify(config.data)
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return error
  }
)

export const post = function (url, params) {
  return new Promise((resolve, reject) => {
    service.post(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}

export const get = function (url, params) {
  const request = params ? `${url}?${qs.stringify(params)}` : url
  return new Promise((resolve, reject) => {
    service.get(request)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}

export const del = function (url, params, body) {
  const request = `${url}?${qs.stringify(params)}`
  return new Promise((resolve, reject) => {
    service.delete(request, body)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}

export default {
  post, get, del
}
