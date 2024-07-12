import React, { useState } from "react";
import axios from "axios";
import "./weatherApp.css";
import WeatherDisplay from "./weatherDisplay";

const API_KEY = "d16b7a211feab41231b8d0ad4bbf6c24";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      setWeatherData((prevData) => [...prevData, response.data]);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city && weatherData.length < 10) {
      fetchWeather(city);
      setCity("");
    } else if (weatherData.length >= 10) {
      setError("You can only search for up to 10 cities.");
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      <WeatherDisplay
        setWeatherData={setWeatherData}
        weatherData={weatherData}
      ></WeatherDisplay>
    </div>
  );
};

export default WeatherApp;
