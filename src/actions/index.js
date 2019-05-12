import weather from '../apis/weather';
import 'babel-polyfill';
import axios from 'axios';

const API_KEY = 'a99f7a248822d03638866df12c3d5e58';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => async dispatch => {
    const url = `${ROOT_URL}&q=${city},lt`;
    const response = await axios.get(url);
    dispatch({ type: FETCH_WEATHER, payload: response.data});
}
