import React from "react";
import { IForecast } from "../../models/Forecast";
import ForecastIconDisplay from "../ForecastIconDisplay";
import ForecastText from "../ForecastText";

interface IProps {
  isCelcius: boolean;
  forecast: IForecast;
}

const ForecastView: React.FC<IProps> = ({ isCelcius, forecast }) => (
  <>
    <ForecastText isCelcius={isCelcius} forecast={forecast || {}} />
    <ForecastIconDisplay forecast={forecast} />
  </>
);

export default ForecastView;
