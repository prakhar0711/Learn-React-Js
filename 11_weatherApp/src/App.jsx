import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  // State variables to manage user input, latitude, longitude, and weather data
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  // Function to handle input change
  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      setCity(event.target.value);
    } else {
      setCity("");
    }
  };

  // Function to get latitude and longitude based on the entered city
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

  // Fetch location data on component mount and whenever city changes
  useEffect(() => {
    getLocation();
  }, [city, getLocation]);

  // Function to fetch weather data based on latitude and longitude
  const getWeatherData = useCallback(async () => {
    try {
      if (lat !== "" && lon !== "") {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={YOUR_API_KEY}`
        );
        const data1 = await res.json();
        setWeatherData(data1);
        console.log(weatherData);
      } else {
        setWeatherData(null);
      }
    } catch (error) {
      console.log(error);
    }
  }, [lat, lon]);

  // Fetch weather data on component mount and whenever latitude or longitude changes
  useEffect(() => {
    getWeatherData();
  }, [lat, lon, getWeatherData]);

  return (
    <>
      {/* Input field to search for a city */}
      <div>
        <input
          className="input input-bordered w-full max-w-xs"
          name="city"
          value={city}
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      {/* Component to display weather data */}
      <div>
        <Weather weatherdata={weatherData} />
      </div>
    </>
  );
}

export default App;


// The App component manages the user input for the city, latitude, longitude, and weather data.
// It uses useState hook to manage state variables and useEffect hook for handling side effects.
// The handleChange function updates the city state based on user input in the input field.
// getLocation function fetches latitude and longitude data based on the entered city using the OpenWeatherMap API.
// useEffect hook is used to call getLocation function when the component mounts and whenever the city state changes.
// getWeatherData function fetches weather data based on latitude and longitude using the OpenWeatherMap API.
// Another useEffect hook is used to call getWeatherData function when the component mounts and whenever the latitude or longitude state changes.
// The Weather component is used to display the fetched weather data.