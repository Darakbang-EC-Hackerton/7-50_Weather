import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherInfo from "../components/WeatherInfo";
import { fetchWeatherData } from "../api";

export default function Home(){
// To-Do: SearchBar와 WeatherInfo에 넘겨줄 data를 만들어주세요!
    
    const handleSearch = async (city) => {

    }
    return <>
        <SearchBar onSearch={handleSearch} />
        <WeatherInfo weatherData={weatherData} />
    </>
}