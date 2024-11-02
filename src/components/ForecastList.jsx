// src/components/ForecastList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import styles from './ForecastList.module.css';

export default function ForecastList({ forecastData }) {
  if (!forecastData || !forecastData.list) return null;

  const dailyForecasts = forecastData.list.filter((_, index) => index % 8 === 0);

  return (
    <div className={styles.forecastList}>
      <h3 className={styles.forecastTitle}>5-Day Forecast</h3>
      <div className={styles.forecastItems}>
        {dailyForecasts.map((forecast) => (
          <ForecastItem key={forecast.dt} forecast={forecast} />
        ))}
      </div>
    </div>
  );
}

ForecastList.propTypes = {
  forecastData: PropTypes.object.isRequired,
};
