import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

function App() {
  const apiKey = import.meta.env.VITE_WEATHER_APP_KEY;
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();

  useEffect(() => {
    const success = (pos) => {
      const objCoords = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };

      setCoords(objCoords);
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    if (coords) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`;

      axios
        .get(url)
        .then((res) => setWeather(res.data))
        .catch((err) => console.log(err));
    }
  }, [coords]);

  return (
    <>
      {weather ? (
        <div>
          <h1>Aplicacion del Clima</h1>
          <WeatherCard weather={weather} />
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
}

export default App;
