import axios from 'axios'

const API_KEY = '29a32c53c83c12024216e08d6c8e3c73'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

//We created a constant with the value of type as it is the best way to avoid errors and typos
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)


  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
