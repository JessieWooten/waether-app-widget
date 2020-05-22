import React from "react";
import styled from "styled-components";
import { IForecast } from "../models/Forecast";
import { Temperature, Heading, Text, Divider } from "./base/Typography";
import WeatherIcon from "./base/WeatherIcon";

interface IProps {
  forecast: IForecast;
}
const WeatherText: React.FC<IProps> = ({
  forecast: { temperature, summary, icon, location, precipProbability },
}) => {
  return (
    <ForecastTextContainer>
      <Text style={{ padding: 0 }}>
        {location?.replace(", United States", "")}
      </Text>
      <Temperature>{Math.round(temperature)}˚</Temperature>
      <HeadingWrapper>
        <WeatherIcon icon={icon} />
        <Heading>{summary}</Heading>
      </HeadingWrapper>
      <Divider />
      <Text>Current Precipitation: {precipProbability * 100}%</Text>
    </ForecastTextContainer>
  );
};

export default WeatherText;

const ForecastTextContainer = styled.div`
  z-index: 15;
  text-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  & svg {
    padding-right: 0.3rem;
  }
`;
