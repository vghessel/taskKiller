import axios from 'axios';

const URL = '/api';

export default axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
