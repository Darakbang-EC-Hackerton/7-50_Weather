// To-Do: WeatherData, ForecastData를 가져올 수 있는 API를 만들어주세요!
import { API_KEY } from './API_KEY';
import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // 온도를 섭씨로 표시
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
  }
};
