import React, { useState } from "react"

export default function WeatherCard({ weather }) {
    const [isFahrenheit, setIsFahrenheit] = useState(false);

    return (
        <div className="bg-sky-100 shadow-lg rounded-2xl p-6 w-full max-w-sm my-auto mx-auto">
            <div className="flex flex-row items-center">
                <h2 className="font-bold text-gray-700 text-lg mb-2 flex-1">{weather.date}</h2>
                <label className="relative inline-flex items-center cursor-pointer scale-55">
                    <input
                        className="sr-only peer"
                        type="checkbox"
                        checked={isFahrenheit}
                        onChange={() => setIsFahrenheit((prev) => !prev)}
                    />
                    <div className="peer rounded-full outline-none duration-100 after:duration-500 w-16 h-8 bg-blue-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 after:content-['C'] after:absolute after:outline-none after:rounded-full after:h-8 after:w-8 after:bg-white after:top-0 after:left-0 after:flex after:justify-center after:items-center after:text-sky-800 after:font-bold peer-checked:after:translate-x-8 peer-checked:after:content-['F'] peer-checked:after:border-white">
                    </div>
                </label>
            </div>
            <div>
                <div className="flex mt-4 mb-2">
                    <div className="flex-1">
                        <div className="text-gray-500 text-sm">{weather.location}</div>
                        <div className="text-4xl font-bold text-indigo-700">
                            {isFahrenheit ? `${weather.temp_f} °F`: `${weather.temp_c} °C`}
                        </div>
                        <div className="text-base text-indigo-600">{weather.description}</div>
                    </div>
                    <div className="w-24 flex items-center justify-center">
                        <img src={weather.icon} alt="Partly cloudy" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}