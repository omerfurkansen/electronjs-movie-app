import axios from 'axios';

import { BASE_URL } from './constants';

// Create an Axios instance with the base URL
export default axios.create({
  baseURL: BASE_URL,
});