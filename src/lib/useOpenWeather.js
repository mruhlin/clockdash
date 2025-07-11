import { useEffect, useState } from 'react';
import useDebug from './useDebug';

export default function useOpenWeather({ key, lat, lon, lang = 'en', unit = 'imperial' }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const debug = useDebug();

  const excludes = 'minutely,alerts';

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?exclude=${excludes}&lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=${unit}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);

      if (debug) {
        console.log('OpenWeather data:', result);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [key, lat, lon, lang, unit]);

  return { data, isLoading, error, fetchData };
}