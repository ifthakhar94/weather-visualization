import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import useCurrentWeather from '../hooks/useCurrentWeather';
import Spinner from './Spinner';

const CurrentWeather = () => {
  const location = useSelector((state) => state.location);
  const apiKey = process.env.REACT_APP_API_KEY;
  const { weatherData, loading, error } = useCurrentWeather(location, apiKey);

  return (
    <div>
      <ToastContainer />

      {loading ? (
        <p><Spinner/></p>
      ) : (
        <>
          {weatherData ? (
            <div>
              <h5 className='text-info'>Current Weather for {location}</h5>
              <p>Temperature: {weatherData.main.temp}°C</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
          ) : (
            <p></p>
          )}
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
