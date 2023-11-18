import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useWeatherForecast = (location, apiKey) => {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch forecast data');
        }

        const data = await response.json();
        setForecastData(data);
      } catch (err) {
        console.error(err);
        setForecastData(null);
        setError('Failed to fetch forecast data');
        toast.error('Failed to fetch forecast data');
      } finally {
        setLoading(false);
      }
    };

    if (location) {
      fetchForecast();
    }
  }, [location, apiKey]);

  return { forecastData, loading, error };
};

export default useWeatherForecast;
