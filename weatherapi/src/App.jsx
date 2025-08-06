import { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9a819aad5d003b36408799ae9b0300e&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      setWeather(null);
      alert('City not found');
    }
  };

  return (
    <>
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <input
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded border mb-4"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Get Weather
      </button>

      {weather && (
<div className="mt-6 text-center">
  <h2 className="text-2xl font-bold mb-4">{weather.name}</h2>

  <table className="table-auto border-collapse border-4 border-gray-500 mx-auto">
    <thead>
      <tr>
        <th className="border-4 border-gray-500 px-4 py-2">Parameter</th>
        <th className="border-4 border-gray-500 px-4 py-2">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border-4 border-gray-500 px-4 py-2">Condition</td>
        <td className="border-4 border-gray-500 px-4 py-2">
          {weather.weather[0].main} - {weather.weather[0].description}
        </td>
      </tr>
      <tr>
        <td className="border-4 border-gray-500 px-4 py-2">Temperature</td>
        <td className="border-4 border-gray-500 px-4 py-2">{weather.main.temp}°C</td>
      </tr>
      <tr>
        <td className="border-4 border-gray-500 px-4 py-2">Humidity</td>
        <td className="border-4 border-gray-500 px-4 py-2">💧 {weather.main.humidity}%</td>
      </tr>
      <tr>
        <td className="border-4 border-gray-500 px-4 py-2">Wind Speed</td>
        <td className="border-4 border-gray-500 px-4 py-2">🌬️ {weather.wind.speed} m/s</td>
      </tr>
      <tr>
        <td className="border-4 border-gray-500 px-4 py-2">Feels Like</td>
        <td className="border-4 border-gray-500 px-4 py-2">{weather.main.feels_like}°C</td>
      </tr>
      <tr>
        <td className="border-4 border-gray-500 px-4 py-2">Pressure</td>
        <td className="border-4 border-gray-500 px-4 py-2">{weather.main.pressure} hPa</td>
      </tr>
      <tr>
        <td className="border-4 border-gray-500 px-4 py-2">Sunrise</td>
        <td className="border-4 border-gray-500 px-4 py-2">
          {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
        </td>
      </tr>
      <tr>
        <td className="border-4 border-gray-500 px-4 py-2">Sunset</td>
        <td className="border-4 border-gray-500 px-4 py-2">
          {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
        </td>
      </tr>
      <tr>
        <td className="border-4 border-gray-500 px-4 py-2">Clouds</td>
        <td className="border-4 border-gray-500 px-4 py-2">{weather.clouds.all}%</td>
      </tr>
    </tbody>
  </table>
</div>

      )}
    </div>
      </>
  );

}

export default App;