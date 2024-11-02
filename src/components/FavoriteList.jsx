// src/components/FavoriteList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteList.css';

export default function FavoriteList({ favorites, onSelectCity }) {
  return (
    <div className="favorite-list">
      <h3>즐겨찾기 목록</h3>
      <ul>
        {favorites.map((fav, index) => (
          <li key={index} onClick={() => onSelectCity(fav.city)}>
            {fav.city}
            {fav.weatherData && (
              <>
                <img
                  src={`http://openweathermap.org/img/wn/${fav.weatherData.weather[0].icon}.png`}
                  alt={fav.weatherData.weather[0].description}
                  className="favorite-weather-icon"
                />
                <span className="favorite-temp">
                  {Math.round(fav.weatherData.main.temp)}°C
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

FavoriteList.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      weatherData: PropTypes.object,
    })
  ).isRequired,
  onSelectCity: PropTypes.func.isRequired,
};
