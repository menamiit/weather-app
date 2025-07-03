# Weather App

A rather simple and modern weather application built with React and [WeatherAPI](https://www.weatherapi.com/), showcasing various React concepts like hooks, API integration, and modular component structure.  
Users can search for any city and view the current weather, temperature (toggle between °C and °F), description, and weather icon.

## Features

- Search for weather by city name
- Displays current temperature, weather description, and icon
- Toggle between Celsius and Fahrenheit
- Responsive and clean UI using Tailwind CSS
- Error handling for invalid city names

## Screenshots

![Weather App Screenshot](screenshot.png)

## Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx
│   │   └── WeatherForm.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
└── API_KEY.js (not committed)
```

## Customization

- **Styling:** Uses [Tailwind CSS](https://tailwindcss.com/) for easy customization.
- **API:** Powered by [WeatherAPI](https://www.weatherapi.com/).

## License

This project is licensed under the MIT License.
