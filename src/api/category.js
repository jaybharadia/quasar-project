import { api } from '../boot/axios'

export const get = (params = null) => {
  return api
    .get('categories', {
      params
    })
    .then((res) => {
      return res.data
    })
}

export const getAttributes = (id, params = null) => {
  return api.get(`categories/${id}`, { params }).then((res) => {
    return res.data
  })
}

export const getDetails = (id, params = null) => {
  return api.get(`categories/${id}`, { params }).then((res) => {
    return res.data
  })
}
