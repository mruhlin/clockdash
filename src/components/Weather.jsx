import { useEffect, useState } from 'react';
import useOpenWeather from '../lib/useOpenWeather';
import { useInterval } from 'usehooks-ts';
import weatherIcon from '../lib/weather/weatherIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/weather.css'; // Ensure you have a CSS file for styling
import moment from 'moment';

function Dailies({ data, iconSet, iconCount }) {
  return <>
    {
      [...Array(iconCount).keys()].map(i => 
        <div className='forecast' key={data?.daily[i]?.dt}>
          {/* Display the day of week as a 3 letter string */}
          <div className="forecast-day">{
            new Date(data?.daily[i]?.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })
          }</div> 
          <FontAwesomeIcon icon={weatherIcon(data?.daily[i]?.weather[0]?.description, iconSet)} className="icon"/>

          <div className="highlow">
            <span className="low">{Math.round(data?.daily[i]?.temp?.min)}°</span>
            <span className="high">{Math.round(data?.daily[i]?.temp?.max)}°</span>
          </div>
        </div>
      )
    }
  </>;
};

function Hourlies({ data, iconSet, iconCount }) {
  return <>
    {    
      [...Array(iconCount).keys()].map(i => 
        <div className='forecast' key={data?.hourly[i]?.dt}>
          <div className="forecast-time">{moment(new Date(data?.hourly[i]?.dt * 1000)).format('h A')}</div>
          <FontAwesomeIcon icon={weatherIcon(data?.hourly[i]?.weather[0]?.description, iconSet)} className="icon"/>
          <div className="temp">{Math.round(data?.hourly[i]?.temp)}°</div>
        </div>
      )
    }
  </>;
};

function Weather({iconSet = 0, iconCount = 6}) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; // Ensure the API key is set in .env file
  const lat = import.meta.env.VITE_WEATHER_LAT; // Latitude from .env file
  const lon = import.meta.env.VITE_WEATHER_LON; // Longitude from .env file
  const [hourlyToggle, setHourlyToggle] = useState(false);

  const {data, isLoading, error, fetchData: fetchWeather} = useOpenWeather({
    key: apiKey,
    lat, lon,
    lang: 'en'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeather();
    }, 1000 * 60 * 15); // Fetch weather data every 15 minutes

    return clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  else if (error) {
    return <div>Error: {error.message}</div>;
  }
  else if (!data || !data.current) {
    return <div>No weather data available</div>;
  }
  else {
    return (
       <div className="weather" key="heyweather">
            <div className="current-weather"  onClick={() => setHourlyToggle(!hourlyToggle)}>
              <FontAwesomeIcon icon={weatherIcon(data?.current?.weather[0].description, iconSet)} className="icon" /> 
              {Math.round(data?.current?.temp)}°
            </div>
            {hourlyToggle ? 
              <Hourlies data={data} iconSet={iconSet} iconCount={iconCount} /> : 
              <Dailies data={data} iconSet={iconSet} iconCount={iconCount} />
            }
          </div>
    );
  }
};

export default Weather;