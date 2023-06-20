import axios from 'axios';

export const publicAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const privateAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set(value) {
    privateAPI.defaults.headers.Authorization = value;
  },
  unset() {
    privateAPI.defaults.headers.Authorization = null;
  },
};
