import themes from './themes';
import { iconSets } from './weather/weatherIcon';
import { useState, useEffect } from 'react';

export default function useRandomTheme(timeInterval = 1000 * 60 * 5) {
  const [theme, setTheme] = useState({});
  const [iconSet, setIconSet] = useState(iconSets[0]); // Default to the first icon set

  const randomizeTheme = () => {
    const randomIndex = Math.floor(Math.random() * themes.length);
    setTheme(themes[randomIndex % themes.length]);
    setIconSet(iconSets[randomIndex % iconSets.length]); // Randomly select an icon set
  };

  useEffect(() => { 
    randomizeTheme(); // Set initial theme on mount
  }, []);
  
  setInterval(() => {
    randomizeTheme();
  }, timeInterval);

  return {theme, iconSet};
};