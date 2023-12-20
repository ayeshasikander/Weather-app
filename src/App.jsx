import React, { useEffect, useState } from "react";
import "./App.css";
import sunset from "./assets/sunset.jpg";
import landscape4 from './assets/landscape4.png';
import Detail from "./components/Detail";
import { getFormatedData } from "./Weatherapi";

function App() {
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [background, setBackground] = useState(sunset);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFormatedData(city, unit);
      setWeather(data);

      const thershold = unit === "metric" ? 20 : 60;
      if(data.temp <= thershold){
        setBackground(landscape4);
      }else{
        setBackground(sunset);
      }
    };
    fetchData();
  }, [unit, city]);

  const handleUnitChange = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnit(isCelsius ? "metric" : "imperial");
  };
  const enterKey = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <div className="wrapper">
        {weather && (
          <div>
            <div className="content2 content_input">
              <input
                type="text"
                name="city"
                placeholder="Enter city name..."
                onKeyDown={enterKey}
              />
              <button onClick={(e) => handleUnitChange(e)}>°F</button>
            </div>
            <div className="container">
              <div className="content content_temperature">
                <div className="icon">
                  <h3>{`${weather.name},${weather.country}`}</h3>
                  <img src={weather.iconURL} alt="weather" />
                  <h3>{weather.description}</h3>
                </div>
                <div className="temperature">
                  <h1>{`${weather.temp.toFixed()} °${
                    unit === "metric" ? "C" : "F"
                  }`}</h1>
                </div>
              </div>
              <div className="card_desc">
                <Detail weather={weather} unit={unit} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
