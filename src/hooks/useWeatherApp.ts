import { useState, useEffect } from "react";
import { IForecast, IForecastImage } from "../models/Forecast";
import {
  handleFetchForecast,
  IForecastError,
  IForecastResponse,
} from "../api/WeatherServiceApi";

const useWeatherApp = () => {
  let location = window.localStorage.getItem("wwjw-location");
  const [forecast, setForecast] = useState<IForecast | undefined>(undefined);
  const [image, setImage] = useState<IForecastImage | undefined>(undefined);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCelcius, setIsCelcius] = useState(
    window.localStorage.getItem("wwjw-celcius") === "true"
  );
  const updateLocation = (newLocation: string) => {
    window.localStorage.setItem("wwjw-location", newLocation);
    location = newLocation;
  };
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setErrorMessage("");
        setForecast(undefined);
        if (!location) return setIsSettingsOpen(true);
        const forecastResponse = await handleFetchForecast(location);

        if (forecastResponse.hasOwnProperty("error")) {
          const errorResponse = forecastResponse as IForecastError;
          return setErrorMessage(errorResponse.message);
        }
        const { image, forecast } = forecastResponse as IForecastResponse;
        setForecast(forecast);
        setImage(image);
      } catch (e) {
        setErrorMessage(e);
        console.error(e);
      }
    })();
  }, [location]);

  return {
    location,
    forecast,
    setForecast,
    image,
    setImage,
    isSettingsOpen,
    setIsSettingsOpen,
    isCelcius,
    setIsCelcius,
    updateLocation,
    errorMessage,
    setErrorMessage,
  };
};

export default useWeatherApp;
