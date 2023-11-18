import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useCurrentWeather = (location, apiKey) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        console.error(err);
        setWeatherData(null);
        setError('Failed to fetch weather data');
        toast.error('Check your city name! Try again.');
      } finally {
        setLoading(false);
      }
    };

    if (location) {
      fetchData();
    }
  }, [location, apiKey]);

  return { weatherData, loading, error };
};

export default useCurrentWeather;
