import { get } from '../utils/api'
const prefix = '/news'
export function getList (type) {
  if (type) {
    return get(`${prefix}/list`, {type: type})
  }
  return get(`${prefix}/list`, null)
}

export function getOne (id) {
  return get(`${prefix}/one`, {id: id})
}

export function getPage (param) {
  return get(`${prefix}/page`, param)
}
