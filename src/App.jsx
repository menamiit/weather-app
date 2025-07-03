import React, { useState, useEffect } from 'react'
import WeatherCard from './components/weatherCard'
import WeatherForm from './components/WeatherForm'

function App() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    setWeather(null);

    const fetchWeather = async () => {
      try {
        // OpenWeatherMap API endpoint
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`
        );
        if (!res.ok) throw new Error("City not found");
        const data = await res.json();
        setWeather({
          location: data.name,
          description: data.weather[0].description,
          temp_c: Math.round(data.main.temp),
          temp_f: Math.round((data.main.temp * 9) / 5 + 32),
          date: new Date(data.dt * 1000).toLocaleString(),
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        });
      } catch (err) {
        setError(err.message);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className='bg-gray-600 h-screen flex items-center justify-center'>
      <div className="bg-sky-100 shadow rounded-lg p-5 w-full max-w-sm">
        <WeatherForm onSearch={setCity}/>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {weather && <WeatherCard weather={weather}/>}
      </div>
    </div>
  )
}

export default App
