import { useState } from "react";
import type { WeatherData } from "./types";

const API_KEY = "cfc01cb49f5a47cd9920deeca4bc75a5";

function App() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data: WeatherData = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeatherData(null);
      alert("Could not find weather for that city.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-600 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Weather App</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
          className="px-4 py-2 rounded-lg border border-white focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          Search
        </button>
      </div>

      {weatherData && (
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl text-white shadow-lg text-center">
          <h2 className="text-3xl font-bold">{weatherData.name}</h2>
          <p className="text-xl capitalize">{weatherData.weather[0].description}</p>
          <p className="text-5xl font-bold">{weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
          <div className="flex justify-center mt-4">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather icon"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
