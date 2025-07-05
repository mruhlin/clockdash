import * as solidIcons from './solid';
import * as duotoneIcons from './duotone';
import * as regularIcons from './regular';

export const iconSets = [
  solidIcons,
  duotoneIcons,
  regularIcons
];
  
const weatherIcons = (set) => ({
    // thunder
    "thunderstorm with light rain": set.faCloudBolt,
    "thunderstorm with rain": set.faCloudBolt,
    "thunderstorm with heavy rain": set.faCloudBolt,
    "light thunderstorm": set.faCloudBolt,
    "thunderstorm": set.faCloudBolt,
    "heavy thunderstorm": set.faCloudBolt,
    "ragged thunderstorm": set.faCloudBolt,
    "thunderstorm with light drizzle": set.faCloudBolt,
    "thunderstorm with drizzle": set.faCloudBolt,
    "thunderstorm with heavy drizzle": set.faCloudBolt,
    
    // drizzle
    "light intensity drizzle": set.faCloudDrizzle,
    "drizzle": set.faCloudDrizzle,
    "heavy intensity drizzle": set.faCloudDrizzle,
    "light intensity drizzle rain": set.faCloudDrizzle,
    "drizzle rain": set.faCloudDrizzle,
    "heavy intensity drizzle rain": set.faCloudShowersHeavy,
    "shower rain and drizzle": set.faCloudShowers,
    "heavy shower rain and drizzle": set.faCloudShowersHeavy,
    "shower drizzle": set.faCloudShowers,
  
    // rain
    "light rain": set.faCloudRain,
    "moderate rain": set.faCloudRain,
    "heavy intensity rain": set.faCloudRain,
    "very heavy rain": set.faCloudShowersHeavy,
    "extreme rain": set.faCloudShowersHeavy,
    "freezing rain": set.faCloudSleet,
    "light intensity shower rain": set.faCloudShowers,
    "shower rain": set.faCloudShowers,
    "heavy intensity shower rain": set.faCloudShowersHeavy,
    "ragged shower rain": set.faCloudShowers,
  
    // snow
    "light snow": set.faSnowflakes,
    "snow": set.faSnowflakes,
    "heavy snow": set.faSnowflakes,
    "sleet": set.faCloudSleet,
    "light shower sleet": set.faCloudSleet,
    "shower sleet": set.faCloudSleet,
    "light rain and snow": set.faCloudSnow,
    "rain and snow": set.faCloudSnow,
    "light shower snow": set.faCloudSnow,
    "shower snow": set.faCloudSnow,
    "heavy shower snow": set.faCloudSnow,
    
    //atmosphere
    "mist": set.faFog,
    "smoke": set.faSmoke,
    "haze": set.faSunHaze,
    "sand": set.faSunDust,
    "fog": set.faFog,
    "sand /dust whirls": set.faSunDust,
    "dust": set.faSunDust,
    "volcanic ash": set.faVolcano,
    "squalls": set.faHurricane,
    "tornado": set.faTornado,
    
    // clear
    "clear sky": set.faSun,
  
    // clouds
    "few clouds": set.faCloudSun,
    "scattered clouds": set.faSunCloud,
    "broken clouds": set.faSunCloud,
    "overcast clouds": set.faClouds
  });

export default (description, iconSet=solidIcons) => {
  return weatherIcons(iconSet)[description?.toLowerCase()] || set.faQuestionCircle
};
