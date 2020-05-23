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
      return <WiDaySunny size={size} title={ForecastIcon.CLEAR_DAY} />;
    case ForecastIcon.CLEAR_NIGHT:
      return <WiNightClear size={size} title={ForecastIcon.CLEAR_NIGHT} />;
    case ForecastIcon.RAIN:
      return <WiRain size={size} title={ForecastIcon.RAIN} />;
    case ForecastIcon.SNOW:
      return <WiSnow size={size} title={ForecastIcon.SNOW} />;
    case ForecastIcon.SLEET:
      return <WiSleet size={size} title={ForecastIcon.SLEET} />;
    case ForecastIcon.WIND:
      return <WiStrongWind size={size} title={ForecastIcon.WIND} />;
    case ForecastIcon.FOG:
      return <WiFog size={size} title={ForecastIcon.FOG} />;
    case ForecastIcon.CLOUDY:
      return <WiCloudy size={size} title={ForecastIcon.CLOUDY} />;
    case ForecastIcon.PARTLY_CLOUDY_DAY:
      return (
        <WiDayCloudyHigh size={size} title={ForecastIcon.PARTLY_CLOUDY_DAY} />
      );
    case ForecastIcon.PARTLY_CLOUDY_NIGHT:
      return (
        <WiNightAltPartlyCloudy
          size={size}
          title={ForecastIcon.PARTLY_CLOUDY_NIGHT}
        />
      );
    case ForecastIcon.HAIL:
      return <WiHail size={size} title={ForecastIcon.HAIL} />;
    case ForecastIcon.THUNDERSTORM:
      return <WiThunderstorm size={size} title={ForecastIcon.THUNDERSTORM} />;
    case ForecastIcon.TORNADO:
      return <WiTornado size={size} title={ForecastIcon.TORNADO} />;
    default:
      return <WiDaySunny size={size} color="#000" />;
  }
};

export default WeatherIcon;
