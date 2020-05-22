import React from "react";
import styled from "styled-components";
import { IForecast } from "../models/Forecast";
import { Temperature, Heading, Text, Divider } from "./base/Typography";
import WeatherIcon from "./base/WeatherIcon";
import { invert, rgba } from "polished";
import { BlurIn } from "./Animation";

interface IProps {
  forecast: IForecast;
  isCelcius: boolean;
}
const WeatherText: React.FC<IProps> = ({
  isCelcius,
  forecast: { temperature, summary, icon, location, precipProbability },
}) => {
  function convertToCelcius(F: number): number {
    return ((F - 32) * 5) / 9;
  }
  return (
    <ForecastTextContainer delay="400ms">
      <Text style={{ padding: 0 }}>
        {location?.replace(", United States", "")}
      </Text>
      <Temperature>
        {Math.round(isCelcius ? convertToCelcius(temperature) : temperature)}˚
      </Temperature>
      <HeadingWrapper>
        <WeatherIcon icon={icon} />
        <Heading>{summary}</Heading>
      </HeadingWrapper>
      <Divider />
      <Text>Current Precipitation: {Math.round(precipProbability * 100)}%</Text>
    </ForecastTextContainer>
  );
};

export default WeatherText;

const ForecastTextContainer = styled(BlurIn)<{ delay: string }>`
  z-index: 15;
  text-shadow: 0 0 16px ${(props) => rgba(invert(props.theme.textColor), 0.3)};
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  & svg {
    padding-right: 0.3rem;
  }
`;
