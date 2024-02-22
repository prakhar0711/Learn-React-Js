import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Weather from "./components/Weather";
function App() {
  const [city, setCity] = useState("");
  let [lat, setLat] = useState("");
  let [lon, setLon] = useState("");
  let [weatherData, setweatherData] = useState(null);
  // handle change
  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      setCity(event.target.value);
    } else {
      setCity("");
    }
  };

  // get the latitude and longitude on the basis of the city entered by the user
  const getLocation = useCallback(async () => {
    try {
      if (!city.trim()) {
        // Skip API call if city is empty or only whitespace
        return;
      }
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid={YOUR_API_KEY}`
      );
      const data = await response.json();
      setLat(data[0].lat);
      setLon(data[0].lon);
    } catch (error) {
      console.log(error);
    }
  }, [city]);
  useEffect(() => {
    getLocation();
  }, [city, getLocation]);

  const getWeatherData = useCallback(async () => {
    try {
      if (lat !== "" && lon !== "") {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={YOUR_API_KEY}`
        );
        const data1 = await res.json();
        setweatherData(data1);
        console.log(weatherData);
      } else {
        setweatherData(null);
      }
    } catch (error) {
      console.log(error);
    }
  }, [lat, lon]);
  useEffect(() => {
    getWeatherData();
  }, [lat, lon, getWeatherData]);
  return (
    <>
      
      <div>
        <input
          className="input input-bordered w-full max-w-xs"
          name="city"
          value={city}
          type="text"
          placeholder="search"
          onChange={handleChange}
        />
        
      </div>
      <div>
        <Weather weatherdata={weatherData} />
      </div>
    </>
  );
}

export default App;
