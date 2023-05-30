import React from "react";
import { useState } from "react";

const WeatherCard = ({ weather, temp }) => {
  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  const [switchTemp, setSwitchTemp] = useState(true);

  const handleSwitchTemp = () => {
    setSwitchTemp(!switchTemp);
  };
  return (
    <article className="content__weather">
      <header className="content__header">
        <h1 className="title">Weather App</h1>
        <h2 className="subtitle">
          {weather.name}, {weather.sys.country}
        </h2>
      </header>
      <section className="content__info">
        <div className="content__img">
          <img src={icon} alt={weather.weather[0].description} />
        </div>
        <div className="info">
          <h3>"{weather.weather[0].description}"</h3>
          <ul className="info__list">
            <li>
              <span>Wind Speed</span>
              <span> {weather.wind.speed} m/s</span>
            </li>
            <li>
              <span>Clouds</span>
              <span> {weather.clouds.all} %</span>
            </li>
            <li>
              <span>Pressure</span>
              <span> {weather.main.pressure} hPa</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="content__temp">
        <h2>{switchTemp ? `${temp.celsius} ºC` : `${temp.farenheit} ºF`}</h2>
      </section>
      <button onClick={handleSwitchTemp}>
        Change to {switchTemp ? "ºC" : "ºF"}
      </button>
    </article>
  );
};

export default WeatherCard;
