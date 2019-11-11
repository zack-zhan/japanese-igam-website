import { get } from '../utils/api'
const prefix = '/corporation'
export function getList (id) {
  return get(`${prefix}/list`, {productid: id})
}

export function getPage (param) {
  return get(`${prefix}/page`, param)
}
