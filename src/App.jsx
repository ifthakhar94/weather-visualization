import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import CurrentWeather from './components/CurrentWeather';
import 'react-toastify/dist/ReactToastify.css';
import WeatherForecast from './components/WeatherForecast';
import ForecastVisualization from './components/ForecastVisualization';
import { WeatherIcon, sfgfg } from './utility/icons/icons';
import "./styles/ComponentStyle.css"

function App() {
  return (
    <div className="weather-app">      
         <div className="container">
          <div className="row">
            <div className="col-12"><h4 className='text-info text-center m-5'>Orange Toolz - Weather App {WeatherIcon}</h4></div>
          </div>
          <div className="row">
          <div className="col-md-6 offset-md-3">
          <SearchForm />
          </div>
          </div>
          <div className="weather-wrapper mt-3">
            <div className="row">          
              <div className="col-md-6 col-lg-4">
                <WeatherForecast />
              </div>
              <div className="col-md-6 col-lg-4">
                <CurrentWeather />
              </div>
              <div className="col-md-6 col-lg-4">
                <ForecastVisualization />
              </div>
            </div>
          </div>
         </div>
    </div>
  );
}

export default App;
