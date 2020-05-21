export interface IForecast {
  temperature: number;
  summary: string;
  icon: ForecastIconType;
  location?: string;
  precipProbability: number;
}

export enum ForecastIcon {
  CLEAR_DAY = "clear-day",
  CLEAR_NIGHT = "clear-night",
  RAIN = "rain",
  SNOW = "snow",
  SLEET = "sleet",
  WIND = "wind",
  FOG = "fog",
  CLOUDY = "cloudy",
  PARTLY_CLOUDY_DAY = "partly-cloudy-day",
  PARTLY_CLOUDY_NIGHT = "partly-cloudy-night",
  HAIL = "hail",
  THUNDERSTORM = "thunderstorm",
  TORNADO = "tornado",
}

export type ForecastIconType = ForecastIcon;
