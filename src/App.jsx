import process from 'process';
import React, { useState, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import TopMenu from './components/TopMenu.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import CameraFeed from './components/CameraFeed.jsx'; // Import CameraFeed component
import 'leaflet/dist/leaflet.css';
import './App.css';
import L from 'leaflet';

// Fixing the default icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const UPDATE_INTERVAL = 3000; // 3 seconds in milliseconds
const CAMERA_API_URL = 'https://api.example.com/cameras'; // Replace with actual Camera API URL

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [position, setPosition] = useState(null);
  const [cameraData, setCameraData] = useState(null); // New state for camera data

  // Memoized fetchWeather function to avoid unnecessary re-creations
  const fetchWeather = useCallback(async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      if (!res.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }, []);

  // Function to fetch camera data based on position
  const fetchCameraData = useCallback(async (lat, lon) => {
    try {
      const res = await fetch(`${CAMERA_API_URL}?lat=${lat}&lon=${lon}&radius=10`); // Adjust parameters as needed
      if (!res.ok) {
        throw new Error('Failed to fetch camera data');
      }
      const data = await res.json();
      setCameraData(data);
    } catch (error) {
      console.error('Error fetching camera data:', error);
    }
  }, []);

  useEffect(() => {
    let intervalId;

    if (position) {
      // Initial fetch when position is set
      fetchWeather(position.lat, position.lng);
      fetchCameraData(position.lat, position.lng); // Fetch camera data

      // Set up interval for periodic updates
      intervalId = setInterval(() => {
        fetchWeather(position.lat, position.lng);
        fetchCameraData(position.lat, position.lng); // Update camera data periodically
      }, UPDATE_INTERVAL);
    }

    // Cleanup function to clear the interval when component unmounts or position changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [position, fetchWeather, fetchCameraData]);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        // No need to call fetchWeather here as useEffect handles it
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  };

  return (
    <div className="App">
      <TopMenu />
      <div className="map-container">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
              OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </div>
      <div className="info-container">
        {weatherData && <WeatherCard data={weatherData} />}
        {cameraData && <CameraFeed data={cameraData} />} {/* Render CameraFeed */}
      </div>
    </div>
  );
}

export default App;
