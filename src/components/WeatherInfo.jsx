// src/components/WeatherInfo.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './WeatherInfo.module.css';
import FavoriteBTN from './FavoriteBTN';

export default function WeatherInfo({ weatherData, onAddFavorite }) {
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    return (
        <div className="weather-info">
            <h2>Current Weather in {weatherData.name}</h2>
            <img src={iconUrl} alt={weatherData.weather[0].description} />
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            <FavoriteBTN city={weatherData.name} onAddFavorite={onAddFavorite} />
        </div>
    );
}

WeatherInfo.propTypes = {
    weatherData: PropTypes.object.isRequired,
    onAddFavorite: PropTypes.func.isRequired,
};
