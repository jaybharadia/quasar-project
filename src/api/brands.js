
import { api } from 'src/boot/plugins/axios';

export const get = (params = null) => {
  return api.get('brands', { params }).then((res) => {
    return res.data;
  });
};

export const getDetail = (id, params = null) => {
  return api.get(`brands/${id}`, { params }).then((res) => {
    return res.data;
  });
};
