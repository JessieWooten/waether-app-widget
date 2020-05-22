import { IForecast, ForecastIcon, IForecastImage } from "../models/Forecast";

const API_URL = "https://woot-weather-application.herokuapp.com/weather";

export interface IForecastResponse {
  location?: string;
  forecast: IForecast;
  image: IForecastImage;
}

const fetchForecast = async (url: string): Promise<IForecastResponse> => {
  const forecast: IForecastResponse = {
    location: "Nashville, Tennessee, United States",
    forecast: {
      temperature: 64.87,
      summary: "Rain today through Wednesday.",
      icon: ForecastIcon.RAIN,
      precipProbability: 0,
    },
    image: {
      id: "YUGSnfrliPk",
      imgUrl:
        "https://images.unsplash.com/photo-1521147923319-b7fbf0b31c6f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNjU0MH0",
      photographer: "Joel Tasche",
    },
  };
  return new Promise((resolve) => setTimeout(() => resolve(forecast), 0));
};

export const fetchForecastByCoordinates = async (
  lat: string,
  long: string
): Promise<IForecastResponse> => {
  return fetchForecast("");
};
export const fetchForecastByLocationName = async (
  name: string
): Promise<IForecastResponse> => {
  return fetchForecast("");
};
