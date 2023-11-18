import React from 'react';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useForecastVisualization from '../hooks/useForecastVisualization';
import Spinner from './Spinner';

const ForecastVisualization = () => {
  const location = useSelector((state) => state.location);
  const apiKey = process.env.REACT_APP_API_KEY;

  //   Fetching Data From Custom Hook 

  const { forecastChartData, loading } = useForecastVisualization(location, apiKey);

  const renderTemperatureChart = () => {
    if (!forecastChartData) {
      return <p></p>;
    }

    return (
      <>
      <h5 className='text-info mb-3 mt-3'> Weather Visualization for {location}  </h5>
      <LineChart width={600} height={300} data={forecastChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="red" />
      </LineChart>
      </>
    );
  };

  return (
    <div>
      {/* <ToastContainer /> */}
      {/* Loader  */}
      {loading ? <Spinner/>: renderTemperatureChart()}
    </div>
  );
};

export default ForecastVisualization;
