import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";

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
        .then((res) => {
          setWeather(res.data);
          const objTemp = {
            celsius: +(res.data.main.temp - 273.15).toFixed(1),
            farenheit: +((res.data.main.temp - 273.15) * (9 / 5) + 32).toFixed(
              1
            ),
          };

          setTemp(objTemp);
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  return (
    <>
      {weather ? (
        <div className="app">
          <WeatherCard weather={weather} temp={temp} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
