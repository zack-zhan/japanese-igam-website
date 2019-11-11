import { get } from '../utils/api'
const prefix = '/notice'
export function getList () {
  return get(`${prefix}/list`, null)
}

export function getOne (id) {
  return get(`${prefix}/one`, {id: id})
}

export function getPage (param) {
  return get(`${prefix}/page`, param)
}
