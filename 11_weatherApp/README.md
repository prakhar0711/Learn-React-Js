
# Weather App

This is a simple weather app built with React that displays weather information based on the user's input city.

## Features

- Fetches weather data from the OpenWeatherMap API.
- Displays weather information including temperature, minimum and maximum temperature, weather description, pressure, visibility, wind speed, and humidity.
- Dynamically selects weather icons based on weather conditions.

## How to Use

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   cd weather-app
   npm install
   ```

3. Get an API key:
   - Sign up on [OpenWeatherMap](https://openweathermap.org/) to get your API key.

4. Set up API key:
   - Replace `{YOUR_API_KEY}` placeholders in both `App.js` and `Weather.js` files with your OpenWeatherMap API key.

5. Run the app:
   ```bash
   npm run dev
   ```

6. Enter the city name in the search input field and press Enter.
   - Weather information for the entered city will be displayed.

## Components

### App Component (`App.js`)

- **Steps to Code:**
  1. **State Initialization:** Initialize state variables for managing user input, latitude, longitude, and weather data using `useState`.
  2. **Input Change Handler:** Implement a function (`handleChange`) to handle input change and update the city state accordingly.
  3. **Get Location:** Define a function (`getLocation`) using `useCallback` and `fetch` to get latitude and longitude based on the entered city from the OpenWeatherMap API.
  4. **Fetch Weather Data:** Implement a function (`getWeatherData`) using `useCallback` and `fetch` to fetch weather data based on latitude and longitude from the OpenWeatherMap API.
  5. **Effect Hooks:** Use `useEffect` hooks to trigger `getLocation` and `getWeatherData` functions when the component mounts and whenever the city, latitude, or longitude state changes.
  6. **Render Input Field and Weather Component:** Render an input field for the user to enter the city name and a `Weather` component to display weather information.

- **Logic to Code:**
  - The `App` component manages user input for the city, fetches latitude and longitude based on the entered city, and fetches weather data based on latitude and longitude. It then passes the weather data to the `Weather` component for display.

### Weather Component (`Weather.js`)

- **Steps to Code:**
  1. **Props Handling:** Receive `weatherdata` as props.
  2. **Loading Handling:** Check if `weatherdata` is available, if not, display a loading message.
  3. **Weather Icon Selection:** Implement a function (`getWeatherIcon`) to select appropriate weather icon based on weather condition fetched from `weatherdata`.
  4. **Render Weather Information:** Display weather information including temperature, minimum and maximum temperature, weather description, pressure, visibility, wind speed, and humidity using JSX.
  5. **Styling:** Apply Tailwind CSS classNames to format the weather component.

- **Logic to Code:**
  - The `Weather` component receives weather data as props and dynamically selects weather icons based on weather conditions. It displays weather information fetched from the OpenWeatherMap API in a formatted manner.

## Dependencies

- [react-icons](https://react-icons.github.io/react-icons/)
- [tailwindcss](https://tailwindcss.com/)

## Credits

- Weather icons provided by [React Icons](https://react-icons.github.io/react-icons/).
- Weather data fetched from [OpenWeatherMap API](https://openweathermap.org/).


