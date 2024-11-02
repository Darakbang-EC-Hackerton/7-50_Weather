// src/routes/home.jsx
import React, { useState } from 'react';
import SearchBar from "../components/SearchBar";
import WeatherInfo from "../components/WeatherInfo";
import ForecastList from "../components/ForecastList";
import { fetchWeatherData, fetchForecastData } from "../api";
import './Home.css';

export default function Home() {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);

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

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="container"> {/* Flexbox 컨테이너 */}
                {weatherData && <WeatherInfo weatherData={weatherData} />}
                {forecastData && <ForecastList forecastData={forecastData} />}
            </div>
        </div>
    );
}
