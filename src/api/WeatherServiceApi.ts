import { IForecast, IForecastImage } from "../models/Forecast";

const API_URL = "https://woot-weather-application.herokuapp.com/weather";

export interface IForecastResponse {
  location?: string;
  forecast: IForecast;
  image: IForecastImage;
}

const fetchForecast = async (url: string): Promise<IForecastResponse> => {
  const { location, forecast, image } = await fetch(url).then((res) =>
    res.json()
  );
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
};

export const fetchForecastByCoordinates = async (
  latitude: number,
  longitude: number
): Promise<IForecastResponse> => {
  const url = `${API_URL}?latitiude=${latitude}&longitude=${longitude}`;
  return fetchForecast(url);
};

export const fetchForecastByLocationName = async (
  place: string
): Promise<IForecastResponse> => {
  const url = `${API_URL}?address=${place.toLocaleLowerCase().trim()}`;
  return fetchForecast(url);
};

export async function getBrowserLocation(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (
      !navigator ||
      !navigator.geolocation ||
      !navigator.geolocation.getCurrentPosition
    ) {
      return reject("Couldn't find getCurrentPosition on browser window");
    }
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve(coords),
      reject,
      options
    );
  });
}
