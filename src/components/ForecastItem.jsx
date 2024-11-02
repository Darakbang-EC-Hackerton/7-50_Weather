// src/components/ForecastItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function ForecastItem({ forecast }) {
  const date = new Date(forecast.dt * 1000).toLocaleDateString();
  const temp = forecast.main.temp;
  const iconUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

  return (
    <div className="forecastItem">
      <p>{date}</p>
      <img src={iconUrl} alt={forecast.weather[0].description} />
      <p>{temp}°C</p>
      <p>{forecast.weather[0].description}</p>
    </div>
  );
}

ForecastItem.propTypes = {
  forecast: PropTypes.object.isRequired,
};
