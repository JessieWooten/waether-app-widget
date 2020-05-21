import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiRain,
  WiSnow,
  WiSleet,
  WiStrongWind,
  WiFog,
  WiCloudy,
  WiDayCloudyHigh,
  WiNightAltPartlyCloudy,
  WiHail,
  WiThunderstorm,
  WiTornado,
} from "weather-icons-react";
import { ForecastIconType, ForecastIcon } from "../../models/Forecast";

interface IProps {
  icon: ForecastIconType;
  size?: number;
}
const WeatherIcon: React.FC<IProps> = ({ icon, size = 24 }) => {
  switch (icon) {
    case ForecastIcon.CLEAR_DAY:
      return <WiDaySunny size={size} />;
    case ForecastIcon.CLEAR_NIGHT:
      return <WiNightClear size={size} />;
    case ForecastIcon.RAIN:
      return <WiRain size={size} />;
    case ForecastIcon.SNOW:
      return <WiSnow size={size} />;
    case ForecastIcon.SLEET:
      return <WiSleet size={size} />;
    case ForecastIcon.WIND:
      return <WiStrongWind size={size} />;
    case ForecastIcon.FOG:
      return <WiFog size={size} />;
    case ForecastIcon.CLOUDY:
      return <WiCloudy size={size} />;
    case ForecastIcon.PARTLY_CLOUDY_DAY:
      return <WiDayCloudyHigh size={size} />;
    case ForecastIcon.PARTLY_CLOUDY_NIGHT:
      return <WiNightAltPartlyCloudy size={size} />;
    case ForecastIcon.HAIL:
      return <WiHail size={size} />;
    case ForecastIcon.THUNDERSTORM:
      return <WiThunderstorm size={size} />;
    case ForecastIcon.TORNADO:
      return <WiTornado size={size} />;
    default:
      return <WiDaySunny size={size} color="#000" />;
  }
};

export default WeatherIcon;
