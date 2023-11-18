import React from 'react';
import { useSelector } from 'react-redux';
import useWeatherForecast from '../hooks/useWeatherForecast';
import Spinner from './Spinner';

const WeatherForecast = () => {
  const location = useSelector((state) => state.location);
  const apiKey = process.env.REACT_APP_API_KEY;
  const { forecastData, loading, error } = useWeatherForecast(location, apiKey);

  const renderForecast = () => {
    if (!forecastData) {
      return <p></p>;
    }

    const dailyForecasts = forecastData.list.filter((item, index) => index % 8 === 0);

    return (
      <div>
        <h5 className='text-info'>5-Day Weather Forecast for {location}</h5>
        <ul className='forcast-list'>
          {dailyForecasts.map((forecast) => (
            <li key={forecast.dt}>
              <p>Date: {new Date(forecast.dt * 1000).toLocaleDateString()}</p>
              <p>High: {forecast.main.temp_max}°C</p>
              <p>Low: {forecast.main.temp_min}°C</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      {loading ? <Spinner/>: renderForecast()}
    </div>
  );
};

export default WeatherForecast;
