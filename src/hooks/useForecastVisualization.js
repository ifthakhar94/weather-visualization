import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useForecastVisualization = (location, apiKey) => {
  const [forecastChartData, setForecastChartData] = useState(null);
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
        const dailyForecasts = data.list.filter((item, index) => index % 8 === 0);

        const chartData = dailyForecasts.map((forecast) => ({
          name: new Date(forecast.dt * 1000).toLocaleDateString(),
          temperature: forecast.main.temp,
        }));

        setForecastChartData(chartData);
      } catch (error) {
        console.error(error);
        setForecastChartData(null);
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

  return { forecastChartData, loading, error };
};

export default useForecastVisualization;
