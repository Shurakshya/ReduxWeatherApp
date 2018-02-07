import axios from 'axios';
import {FETCH_WEATHER} from "../constants";
import {API_KEY} from "../env";

const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type : FETCH_WEATHER,
    payload : request
  }
}
