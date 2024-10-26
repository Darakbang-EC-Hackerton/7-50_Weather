import PropTypes from 'prop-types'
import styles from './WeatherInfo.module.css'

export default function WeatherInfo({ weatherData }) {
// To-Do: weatherData를 props로 받아서 searchBar에서 검색한 데이터를 적절히 표현해주세요!
    if (!weatherData) return null;
    
    const iconUrl = // To-Do: weatherData에서 icon을 찾아주세요!
    return (
        <div className={styles.weatherInfo}>

        </div>
    );
}

WeatherInfo.propTypes = {
    weatherData: PropTypes.object,
};