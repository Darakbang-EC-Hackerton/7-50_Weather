import { useState } from "react";
import ForecastList from "../components/ForecastList";
import SearchBar from "../components/SearchBar";
import { fetchForecastData } from "../api";

export default function Forecast() {
// To-Do: SearchBar와 ForecastList에 넘겨줄 정보를 만들어주세요!

    const handleForecast = async (city) => {

    }
    return <>
        <SearchBar onSearch={handleForecast} />
        <ForecastList forecastData={forecastData} />
    </>
}