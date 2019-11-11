import { get } from '../utils/api'
const prefix = '/price'
export function getList () {
  return get(`${prefix}/list`, null)
}

export function getListByProductId (id) {
  return get(`${prefix}/listbyproductid`, { productid: id })
}

export function getPage (param) {
  return get(`${prefix}/page`, param)
}

export function getLastDayPriceList () {
  return get(`${prefix}/getlastpricelist`, null)
}

export function getLastDayPrice (id) {
  return get(`${prefix}/getlastprice`, {productid: id})
}
