import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherInfo from "../components/WeatherInfo";
import { fetchWeatherData } from "../api";

export default function Home(){
// To-Do: SearchBar와 WeatherInfo에 넘겨줄 data를 만들어주세요!
// 1. api.js에 있는 함수를 이용해보세요
// 2. State를 이용해서 Data를 관리해주세요
// 3. Component에 적절한 값을 넘겨주세요
    
    return <>
        <SearchBar onSearch={?} />
        <?>
    </>
}