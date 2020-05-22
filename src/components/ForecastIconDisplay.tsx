import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { IForecast } from "../models/Forecast";
import WeatherIcon from "./base/WeatherIcon";
import { CenterContent } from "./base/Position";
import { BlurIn } from "./Animation";

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

const DisplayWrapper = styled(BlurIn)`
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  position: absolute;
  right: 2em;
  z-index: 1;
`;

const Halo = styled.div`
  background: radial-gradient(
    ${(props) => rgba(props.theme.primaryColor, 0.5)},
    ${(props) => rgba(props.theme.primaryColor, 0)}
  );
  /* filter: blur(4px); */
  width: 330px;
  height: 330px;
  border-radius: 50%;
  position: absolute;
  z-index: 0;
`;

const InnerHalo = styled(CenterContent)`
  background: ${(props) => props.theme.secondaryColor};
  width: 160px;
  height: 160px;
  border-radius: 50%;
  z-index: 1;
`;
