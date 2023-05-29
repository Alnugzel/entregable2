import React from "react";

const WeatherCard = ({ weather }) => {
  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  console.log(weather);
  return (
    <article>
      <header>
        <h1>Weather App</h1>
        <h2>
          {weather.name}, {weather.sys.country}
        </h2>
      </header>
      <section>
        <div className="content__img">
          <img src={icon} alt={weather.weather[0].description} />
        </div>
      </section>
    </article>
  );
};

export default WeatherCard;
