//don't use it for now, run into troubles

import axios from 'axios';

const API_KEY = 'a99f7a248822d03638866df12c3d5e58';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=`;

export default axios.create({
  baseURL: ROOT_URL,
  timeout: 1000,
})
