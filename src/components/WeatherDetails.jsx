import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = ({
  feelsLike,
  tempMin,
  tempMax,
  pressure,
  humidity,
  seaLevel,
  grndLevel,
  windSpeed,
  windDegree,
  windGust,
  cloudiness,
  visibility,
  sunrise,
  sunset,
  dt,
  timezone,
}) => {
  // Function to convert UNIX timestamp to local time
  const convertUnixToTime = (unix, timezoneOffset) => {
    const date = new Date((unix + timezoneOffset) * 1000);
    return date.toUTCString().replace(' GMT', '');
  };

  // Function to convert wind degrees to direction
  const windDirection = (deg) => {
    const directions = [
      'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N',
    ];
    const index = Math.round(deg / 22.5);
    return directions[index];
  };

  return (
    <div className="weather-details">
      <p><strong>Temperature:</strong> {Math.round(tempMin)}°C - {Math.round(tempMax)}°C</p>
      <p><strong>Feels Like:</strong> {Math.round(feelsLike)}°C</p>
      <p><strong>Pressure:</strong> {pressure} hPa</p>
      <p><strong>Humidity:</strong> {humidity}%</p>
      {seaLevel && <p><strong>Sea Level:</strong> {seaLevel} hPa</p>}
      {grndLevel && <p><strong>Ground Level:</strong> {grndLevel} hPa</p>}
      <p><strong>Wind:</strong> {windSpeed} m/s {windDirection(windDegree)}</p>
      {windGust && <p><strong>Wind Gust:</strong> {windGust} m/s</p>}
      <p><strong>Cloudiness:</strong> {cloudiness}%</p>
      <p><strong>Visibility:</strong> {visibility} meters</p>
      <p><strong>Sunrise:</strong> {convertUnixToTime(sunrise, timezone)}</p>
      <p><strong>Sunset:</strong> {convertUnixToTime(sunset, timezone)}</p>
    </div>
  );
};

export default WeatherDetails;