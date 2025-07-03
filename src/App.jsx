import React, { useState, useEffect } from 'react'
import WeatherCard from './components/weatherCard'
import WeatherForm from './components/WeatherForm'
import API_KEY from '../API_KEY.js'

function App() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(()=> {
      setError("");
      setWeather(null);

    const fetchWeather = async ()=> {
      try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
        if(!res.ok) throw new Error ("City not found");
        const data = await res.json();
        setWeather({
          location: data.location.name,
          description: data.current.condition.text,
          temp_c: Math.round(data.current.temp_c),
          temp_f: Math.round(data.current.temp_f),
          date: data.location.localtime,
          icon:data.current.condition.icon,
        })
      } catch(err) {
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
