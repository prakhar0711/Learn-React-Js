import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";
import "./Weather.css";

function Weather({ weatherdata = "error" }) {
  // If weather data is not available, display loading message
  if (!weatherdata) {
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  }

  // Function to select appropriate weather icon based on weather condition
  const getWeatherIcon = () => {
    const weather = weatherdata.weather[0].main.toLowerCase();
    switch (weather) {
      case "clear":
        return <WiDaySunny className="text-yellow-500 text-5xl" />;
      case "clouds":
        return <WiCloudy className="text-gray-500 text-5xl" />;
      case "rain":
        return <WiRain className="text-blue-500 text-5xl" />;
      case "snow":
        return <WiSnow className="text-white text-5xl" />;
      case "thunderstorm":
        return <WiThunderstorm className="text-yellow-900 text-5xl" />;
      default:
        return <WiDaySunny className="text-yellow-500 text-5xl" />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      {/* Weather Icon */}
      <div className="flex justify-center items-center">{getWeatherIcon()}</div>

      {/* Weather Information */}
      <div className="p-4">
        {/* Temperature */}
        <h3 className="text-2xl font-semibold mb-2">
          Temperature: {(weatherdata.main.temp - 273).toFixed(2)}°C
        </h3>
        {/* Minimum Temperature */}
        <h3 className="text-2xl font-semibold mb-2">
          MinTemp: {(weatherdata.main.temp_min - 273).toFixed(2)}°C
        </h3>
        {/* Maximum Temperature */}
        <h3 className="text-2xl font-semibold mb-2">
          MaxTemp: {(weatherdata.main.temp_max - 273).toFixed(2)}°C
        </h3>
        {/* Weather Description */}
        <h3 className="text-gray-600">
          Description: {weatherdata.weather[0].description}
        </h3>
        {/* Pressure */}
        <h3 className="text-gray-600">Pressure: {weatherdata.main.pressure}</h3>
        {/* Visibility */}
        <h3 className="text-gray-600">Visibility: {weatherdata.visibility}</h3>
        {/* Wind Speed */}
        <h3 className="text-gray-600">Wind Speed: {weatherdata.wind.speed}</h3>
        {/* Humidity */}
        <h3 className="text-gray-600">Humidity: {weatherdata.main.humidity}</h3>
      </div>
    </div>
  );
}

export default Weather;


// The Weather component displays weather information based on the received weatherdata prop.
// It checks if the weatherdata is available, if not, it displays a loading message.
// The getWeatherIcon function selects an appropriate weather icon based on the weather condition fetched from weatherdata.
// Weather information such as temperature, minimum temperature, maximum temperature, description, pressure, visibility, wind speed, and humidity is displayed using JSX.
// Styling classes are applied to format the weather component using Tailwind CSS classNames.