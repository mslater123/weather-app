# Weather App

A React-based application that allows users to view current weather information and live camera feeds based on their selected location on an interactive map.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Interactive Map**: Utilize [React Leaflet](https://react-leaflet.js.org/) to interact with a world map.
- **Weather Information**: Fetch and display real-time weather data using the [OpenWeatherMap API](https://openweathermap.org/api).
- **Live Camera Feeds**: Display live camera feeds from nearby cameras based on the selected location.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Periodic Updates**: Automatically refreshes weather and camera data every 3 seconds.

## Demo

![Weather App Demo](./demo/demo.gif)

*Screenshot of the Weather App in action.*

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mslater123/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Configuration

1. **Create a `.env` file in the root directory and add the following:**

   ```env
   REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
   CAMERA_API_URL=https://api.example.com/cameras
   ```

   - Replace `your_openweathermap_api_key` with your actual OpenWeatherMap API key.
   - Replace `https://api.example.com/cameras` with the actual Camera API URL.

2. **Ensure that your Camera API is accessible and properly configured to accept requests from your application.**

## Usage

1. **Start the development server:**

   Using npm:

   ```bash
   npm start
   ```

   Or using yarn:

   ```bash
   yarn start
   ```

2. **Open your browser and navigate to `http://localhost:3000` to view the app.**

3. **Interact with the Map:**

   - Click on any location on the map to set your desired position.
   - The app will fetch and display the current weather data and nearby camera feeds for the selected location.
   - Data will automatically refresh every 3 seconds.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/)
  - [React Leaflet](https://react-leaflet.js.org/)
  - [Leaflet](https://leafletjs.com/)
  - [React Hooks](https://reactjs.org/docs/hooks-intro.html)

- **APIs:**
  - [OpenWeatherMap API](https://openweathermap.org/api)
  - [Camera API](https://api.example.com/cameras) *(Replace with your actual Camera API)*

- **Others:**
  - [Vite](https://vitejs.dev/) for project setup and bundling

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make your changes and commit them:**

   ```bash
   git commit -m "Add some feature"
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/YourFeatureName
   ```

5. **Open a pull request describing your changes.**

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- **Project Link:** [https://github.com/mslater123/weather-app](https://github.com/mslater123/weather-app)
- **Author:** Mike Slater
- **Email:** [mslater123@example.com](mailto:mslater123@example.com)

Feel free to reach out for any inquiries or feedback!
