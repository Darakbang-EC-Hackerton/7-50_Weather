import PropTypes from 'prop-types'
import styles from './ForecastList.module.css'

export default function ForecastList({ forecastData }) {
  if (!forecastData) return null;
// To-Do: forecastData를 props로 받아 5일치 data를 적절히 표현하세요
  return ( 
    <div className={styles.forecastList}>
      <h3 className={styles.forecastTitle}>5-Day Forecast</h3>
    </div>
  );
}

// To-Do: Props의 type을 지정해주세요!
ForecastList.propTypes = {

};