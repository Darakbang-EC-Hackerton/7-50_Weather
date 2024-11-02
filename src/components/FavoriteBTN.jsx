// src/components/FavoriteBTN.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteBTN.css';

export default function FavoriteBTN({ city, onAddFavorite }) {
  return (
    <button className="favorite-btn" onClick={() => onAddFavorite(city)}>
      ★ 즐겨찾기 추가
    </button>
  );
}

FavoriteBTN.propTypes = {
  city: PropTypes.string.isRequired,
  onAddFavorite: PropTypes.func.isRequired,
};
