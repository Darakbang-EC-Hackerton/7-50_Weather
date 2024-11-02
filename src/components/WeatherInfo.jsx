// src/components/WeatherInfo.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeatherInfo.module.css';

// To-Do: 적절한 Weather 정보를 담은 component를 만들어주세요
// To-Do: weatherData를 props로 받아서 searchBar에서 검색한 데이터를 적절히 표현해주세요!

export default function WeatherInfo({ weatherData }) {
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
// To-Do: weatherData에서 icon을 찾아주세요!
    return (
    <div className={styles.weatherInfo}>
        <h2>Current Weather in {weatherData.name}</h2>
        <img src={iconUrl} alt="Weather Icon" />
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
    );
}
// To-Do: Props의 type을 적절히 만들어주세요
WeatherInfo.propTypes = {
    weatherData: PropTypes.object.isRequired
};
