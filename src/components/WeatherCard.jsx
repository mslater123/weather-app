// src/components/WeatherCard.jsx
import React from 'react';
import WeatherDetails from './WeatherDetails.jsx';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const {
    name,
    main,
    weather,
    wind,
    clouds,
    visibility,
    sys,
    dt,
    timezone,
  } = data;

  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const iconDescription = weather[0].description || 'unknown weather';

  // Function to convert wind degrees to direction
  const windDirection = (deg) => {
    const directions = [
      'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N',
    ];
    const index = Math.round(deg / 22.5) % 16;
    return directions[index];
  };

  // Function to convert UNIX timestamp to local time
  const convertUnixToTime = (unix, timezoneOffset) => {
    const date = new Date((unix + timezoneOffset) * 1000);
    return date.toUTCString().replace(' GMT', '');
  };

  return (
    <div className="weather-card">
      <h2>
        {name}, {sys.country}
      </h2>
      <img src={icon} alt={iconDescription} title={iconDescription} />
      <p className="temperature">{Math.round(main.temp)}°C</p>
      <p className="description">{weather[0].description}</p>

      {/* Integrate WeatherDetails component */}
      <WeatherDetails
        feelsLike={main.feels_like}
        tempMin={main.temp_min}
        tempMax={main.temp_max}
        pressure={main.pressure}
        humidity={main.humidity}
        seaLevel={main.sea_level}
        grndLevel={main.grnd_level}
        windSpeed={wind.speed}
        windDegree={wind.deg}
        windGust={wind.gust}
        cloudiness={clouds.all}
        visibility={visibility}
        sunrise={sys.sunrise}
        sunset={sys.sunset}
        dt={dt}
        timezone={timezone}
      />

      <p className="timestamp">Data Time: {convertUnixToTime(dt, timezone)}</p>
    </div>
  );
};

export default WeatherCard;