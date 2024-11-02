// src/routes/home.jsx
import React, { useState } from 'react';
import SearchBar from "../components/SearchBar";
import WeatherInfo from "../components/WeatherInfo";
import ForecastList from "../components/ForecastList";
import FavoriteList from "../components/FavoriteList";
import { fetchWeatherData, fetchForecastData } from "../api";
import './Home.css';

export default function Home() {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const handleSearch = async (city) => {
        try {
            const weather = await fetchWeatherData(city);
            setWeatherData(weather);

            const forecast = await fetchForecastData(city);
            setForecastData(forecast);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const addFavorite = (city) => {
        if (!favorites.some(fav => fav.city === city)) {
            setFavorites([...favorites, { city, weatherData }]);
        }
    };

    const handleSelectCity = (city) => {
        handleSearch(city);
    };

    return (
        <div >
            <header>
            <FavoriteList favorites={favorites} onSelectCity={handleSelectCity} />
            <SearchBar onSearch={handleSearch} />
            </header>
            <div className="container">
                {weatherData && <WeatherInfo weatherData={weatherData} onAddFavorite={addFavorite} />}
                {forecastData && <ForecastList forecastData={forecastData} />}
            </div>
        </div>
    );
}
