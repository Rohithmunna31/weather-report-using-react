import React from "react";
import "./weatherDisplay.css";

const WeatherDisplay = ({ weatherData, setWeatherData }) => {
  const handleDelete = (index) => {
    setWeatherData(weatherData.filter((_, i) => i !== index));
  };

  return (
    <div className="weather-container">
      {weatherData.map((data, index) => (
        <div key={index} className="weather-card">
          {console.log(data)}
          <h2>{data.name}</h2>
          <p>
            Temperature: {data.main.temp} <sup>o</sup>C
          </p>
          <p>Weather: {data.weather[0].description}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default WeatherDisplay;
