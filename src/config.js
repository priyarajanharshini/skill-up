import axios from 'axios';

export const BASE_URL = 'http://localhost:2000';
// export const BASE_URL='http://13.201.159.83:2000'
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;