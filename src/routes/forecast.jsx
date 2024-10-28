import { useState } from "react";
import ForecastList from "../components/ForecastList";
import SearchBar from "../components/SearchBar";
import { fetchForecastData } from "../api";

export default function Forecast() {
// To-Do: SearchBar와 ForecastList에 넘겨줄 정보를 만들어주세요!
// 1. api.js에 있는 함수를 이용해보세요
// 2. State를 이용해서 Data를 관리해주세요
// 3. Component에 적절한 값을 넘겨주세요

    const handleForecast = async (city) => {

    }
    return <>
        <SearchBar onSearch={?} />
        <ForecastList forecastData={?} />
    </>
}