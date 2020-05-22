import { ForecastIconType, ForecastIcon } from "../../models/Forecast";
import { ITheme } from "../ITheme";
import {
  clearDay,
  clearNight,
  rain,
  snow,
  thunderStorm,
  wind,
  fog,
  cloudy,
  partlyCloudyNight,
  tornado,
} from "../themeStyles";
import partlyCloudyDay from "../themeStyles/partlyCloudyDay";

const fetchThemeByName = (themeName: ForecastIconType): ITheme => {
  switch (themeName) {
    case ForecastIcon.CLEAR_DAY:
      return clearDay;
    case ForecastIcon.CLEAR_NIGHT:
      return clearNight;
    case ForecastIcon.RAIN:
      return rain;
    case ForecastIcon.SNOW:
      return snow;
    case ForecastIcon.SLEET:
      return snow;
    case ForecastIcon.WIND:
      return wind;
    case ForecastIcon.FOG:
      return fog;
    case ForecastIcon.CLOUDY:
      return cloudy;
    case ForecastIcon.PARTLY_CLOUDY_DAY:
      return partlyCloudyDay;
    case ForecastIcon.PARTLY_CLOUDY_NIGHT:
      return partlyCloudyNight;
    case ForecastIcon.HAIL:
      return snow;
    case ForecastIcon.THUNDERSTORM:
      return thunderStorm;
    case ForecastIcon.TORNADO:
      return tornado;
    default:
      return clearDay;
  }
};

export default fetchThemeByName;
