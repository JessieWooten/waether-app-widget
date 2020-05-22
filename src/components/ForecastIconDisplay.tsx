import React from "react";
import styled from "styled-components";
import { rgba, lighten } from "polished";
import { IForecast, IForecastImage } from "../models/Forecast";
import WeatherIcon from "./base/WeatherIcon";
import { centerContent } from "./base/Position";

interface IProps {
  forecast: IForecast;
}

const ForecastIconDisplay: React.FC<IProps> = ({ forecast: { icon } }) => {
  return (
    <DisplayWrapper aria-label="icon-display">
      <Halo aria-label="halo" />
      <InnerHalo aria-label="inner-halo">
        <WeatherIcon aria-label="icon" icon={icon} size={86} />
      </InnerHalo>
    </DisplayWrapper>
  );
};
export default ForecastIconDisplay;

const DisplayWrapper = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  position: absolute;
  right: 2em;
`;

const Halo = styled.div`
  background: radial-gradient(
    ${(props) => rgba(props.theme.primaryColor, 0.5)},
    ${(props) => rgba(props.theme.primaryColor, 0)}
  );
  /* filter: blur(4px); */
  width: 320px;
  height: 320px;
  border-radius: 50%;
  position: absolute;
  z-index: 0;
`;

const InnerHalo = styled(centerContent)`
  background: ${(props) => props.theme.secondaryColor};
  width: 160px;
  height: 160px;
  border-radius: 50%;
  z-index: 1;
`;
