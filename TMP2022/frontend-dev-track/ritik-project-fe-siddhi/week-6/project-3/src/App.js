import React from "react";
import "./App.css";

function App() {
  const [weatherValue, setWeatherValue] = React.useState("");
  const [temp, setTemp] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState("");

  const API_KEY = `059db8009cf1d18218b4421e1823356a`;
  // const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  const getWeather = async (city) => {
    setWeatherValue("Loading...");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setWeatherValue("");
  };

  const ShowWeather = (e) => {
        e.preventDefault();
        getWeather();
    if (data.cod === "404") {
      setImageUrl("");
      setTemp("");
      setStatus("City Not Found");
      return;
    } else {
      setImageUrl(
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
      setTemp(data.main.temp + " ℃");
      setStatus(data.weather[0].main);
    }
  };

  return (
    <div className="App">
      <main>
        <div className="row" style={{ textAlign: "center" }}>
          <form action="" onSubmit={ShowWeather}>
            <input
              type="search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              id="search"
              placeholder="Search by city name"
            />
            <button type="submit">🔍</button>
          </form>
        </div>
        <p>
          Please press enter or search button two times after writing city name.
        </p>

        <div className="row" id="weather">
          {weatherValue !== "City Not Found." && (
            <>
              <div>
                <img src={imageUrl} alt="" />
              </div>
              <div>
                <h2>{temp}</h2>
                <h4>{status}</h4>
              </div>
            </>
          )}
        </div>
      </main>
      <div className="btm">
        <h2 className="status">{weatherValue}</h2>
      </div>
    </div>
  );
}

export default App;
