import React from 'react';
import { useSelector } from 'react-redux';
import useWeatherForecast from '../hooks/useWeatherForecast';
import Spinner from './Spinner';
import { ThermometerLow, ThermometerSun } from '../utility/icons/icons';

const WeatherForecast = () => {
  const location = useSelector((state) => state.location);
  const apiKey = process.env.REACT_APP_API_KEY;

  //   Fetching Data From Custom Hook 
  const { forecastData, loading } = useWeatherForecast(location, apiKey);

  const renderForecast = () => {
    if (!forecastData) {
      return <p></p>;
    }

    const dailyForecasts = forecastData.list.filter((item, index) => index % 8 === 0);

    return (
      <div>
        <h5 className='text-info mb-3 mt-3'>5-Day Weather Forecast for {location}</h5>
        <ul className='forcast-list'>
          {dailyForecasts.map((forecast) => (
            <li key={forecast.dt}>
              <p>Date: {new Date(forecast.dt * 1000).toLocaleDateString()}</p>
              <p>High: {forecast.main.temp_max}°C  <span className='text-info'>{ThermometerSun}</span>  </p>
              <p>Low: {forecast.main.temp_min}°C     <span className='text-info'>{ThermometerLow}</span></p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    
    <div>
        {/* Loader  */}
      {loading ? <Spinner/>: renderForecast()}
    </div>
  );
};

export default WeatherForecast;
