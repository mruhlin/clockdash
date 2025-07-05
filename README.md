# Clockdash
This app powers a simple clock and local weather forecast widget that sits on my desk running in a raspberry pi.

Future iterations will include deployment scripts to automatically push updates to the kiosk.

# Env Vars

The following env vars must be set in a `.env` file at the root directory:
```
VITE_OPENWEATHER_API_KEY= // API key for OpenWeatherAPI

// Location to show weather for.
VITE_WEATHER_LAT=45.72778806045063
VITE_WEATHER_LON=-121.48423553656941
```