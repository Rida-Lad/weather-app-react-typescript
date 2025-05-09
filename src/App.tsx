import { useState } from "react";

function App() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null); // we'll type it properly later

  const handleSearch = () => {
    console.log("Searching weather for:", city);
    // We'll fetch API data here in the next step
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
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl text-white shadow-lg">
          {/* We'll display weather info here */}
          <h2 className="text-2xl font-bold">{weatherData.name}</h2>
          {/* add more data here later */}
        </div>
      )}
    </div>
  );
}

export default App;
