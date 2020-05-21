import { IForecast, ForecastIcon } from "../models/Forecast";

const API_URL = "";

const fetchForecast = async (url: string): Promise<IForecast> => {
  const forecast: IForecast = {
    temperature: 0,
    summary: "string",
    icon: ForecastIcon.CLEAR_DAY,
    location: "string",
    precipProbability: 0,
  };
  return new Promise((resolve) => setTimeout(() => resolve(forecast), 2000));
};

export const fetchForecastByCoordinates = async (
  lat: string,
  long: string
): Promise<IForecast> => {
  return fetchForecast("");
};
export const fetchForecastByLocationName = async (
  name: string
): Promise<IForecast> => {
  return fetchForecast("");
};
