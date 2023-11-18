import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import useCurrentWeather from '../hooks/useCurrentWeather';
import Spinner from './Spinner';
import { CloudRain, ThermometerSun, WindIcon } from '../utility/icons/icons';

const CurrentWeather = () => {
  const location = useSelector((state) => state.location);
  const apiKey = process.env.REACT_APP_API_KEY;

//   Fetching Data From Custom Hook 
  const { weatherData, loading } = useCurrentWeather(location, apiKey);

  return (
    <div>
      <ToastContainer />

      {loading ? (
        <p><Spinner/></p>
      ) : (
        <>
          {weatherData ? (
            <div>
              <h5 className='text-info mb-3 mt-3'>Current Weather for {location}</h5>
              <p>Temperature: {weatherData.main.temp}°C <span className='text-info'>{ThermometerSun}</span> </p>
              <p>Humidity: {weatherData.main.humidity}%  <span className='text-info'>{CloudRain}</span> </p>
              <p>Wind Speed: {weatherData.wind.speed} m/s  <span className='text-info'>{WindIcon}</span> </p>
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
