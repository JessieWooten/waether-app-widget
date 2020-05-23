import { useState, useEffect } from "react";
import { IForecast, IForecastImage } from "../models/Forecast";
import {
  handleFetchForecast,
  IForecastError,
  IForecastResponse,
} from "../api/WeatherServiceApi";

const useWeatherApp = () => {
  const [location, setLocation] = useState(
    window.localStorage.getItem("wwjw-location")
  );
  const [forecast, setForecast] = useState<IForecast | undefined>(undefined);
  const [image, setImage] = useState<IForecastImage | undefined>(undefined);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCelcius, setIsCelcius] = useState(
    window.localStorage.getItem("wwjw-celcius") === "true"
  );
  const updateLocation = (newLocation: string | undefined) => {
    window.localStorage.setItem("wwjw-location", newLocation as string);
    setLocation(newLocation as string);
  };
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        setForecast(undefined);
        if (!location) {
          setIsSettingsOpen(true);
          return setIsLoading(false);
        }
        const forecastResponse = await handleFetchForecast(location);

        if (forecastResponse.hasOwnProperty("error")) {
          const errorResponse = forecastResponse as IForecastError;
          setErrorMessage(errorResponse.message);
          return setIsLoading(false);
        }
        const { image, forecast } = forecastResponse as IForecastResponse;
        setForecast(forecast);
        setImage(image);
        setTimeout(() => setIsLoading(false), 200);
      } catch (e) {
        setTimeout(() => setIsLoading(false), 200);
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
    isLoading,
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
