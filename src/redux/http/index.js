import axios from 'axios';

export const commonAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// export const privateAPI = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

export const token = {
  set(value) {
    commonAPI.defaults.headers.Authorization = value;
  },
  unset() {
    commonAPI.defaults.headers.Authorization = null;
  },
};
