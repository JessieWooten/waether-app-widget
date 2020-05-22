import { IForecast, IForecastImage } from "../models/Forecast";

const API_URL = "https://woot-weather-application.herokuapp.com/weather";

export interface IForecastResponse {
  location?: string;
  forecast: IForecast;
  image: IForecastImage;
}
export interface IForecastError {
  message: string;
  error: any;
}

export type ForecastResponseType = IForecastResponse | IForecastError;
const fetchForecast = async (url: string): Promise<ForecastResponseType> => {
  try {
    const response = await fetch(url).then((res) => res.json());
    if (response.error) {
      return {
        message: response.message,
        error: response.error,
      } as IForecastError;
    }
    const { location, forecast, image } = response;
    const forecastResponse: IForecastResponse = {
      forecast: {
        location: location,
        temperature: forecast.temperature,
        summary: forecast.summary,
        icon: forecast.icon,
        precipProbability: forecast.precipProbability,
      },
      image: {
        id: image.id,
        imgUrl: image.imgUrl,
        photographer: image.photographer,
      },
    };
    return forecastResponse;
  } catch (e) {
    console.log(e, 123123);
    return {
      status: e.status,
      message: e.message,
      error: e.error,
    } as IForecastError;
  }
};

export const fetchForecastByCoordinates = async (
  latitude: number,
  longitude: number
): Promise<ForecastResponseType> => {
  if (latitude === undefined || longitude === undefined)
    throw new Error("[fetchForecastByCoordinates]: Bad input");
  const url = `${API_URL}?latitude=${latitude}&longitude=${longitude}`;
  return fetchForecast(url);
};

export const fetchForecastByLocationName = async (
  place: string
): Promise<ForecastResponseType> => {
  const url = `${API_URL}?address=${place.toLocaleLowerCase().trim()}`;
  return fetchForecast(url);
};

export const handleFetchForecast = async (
  location: string
): Promise<ForecastResponseType> => {
  try {
    const coordinates = JSON.parse(location);
    return await fetchForecastByCoordinates(
      coordinates.latitude,
      coordinates.longitude
    );
  } catch (e) {
    return await fetchForecastByLocationName(location);
  }
};
