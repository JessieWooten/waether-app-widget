import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IForecast, IForecastImage } from "./models/Forecast";
import { fetchForecastByLocationName } from "./api/WeatherServiceApi";
import Theme from "./themes/ThemeWrapper";
import fetchThemeByName from "./themes/utils/fetchThemeByName";
import ForecastText from "./components/ForecastText";
import ForecastIconDisplay from "./components/ForecastIconDisplay";
import { lighten, rgba } from "polished";

function App() {
  const [forecast, setForecast] = useState<IForecast | undefined>(undefined);
  const [image, setImage] = useState<IForecastImage | undefined>(undefined);
  // const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const forecastResponse = await fetchForecastByLocationName(
          "nashville,tn"
        );
        setForecast(forecastResponse.forecast);
        setImage(forecastResponse.image);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  const themeStyles = forecast ? fetchThemeByName(forecast.icon) : undefined;
  return (
    <Theme themeStyles={themeStyles}>
      <WidgetContainer
        className="App"
        backgroundImage={image?.imgUrl || "#"}
        icon={forecast?.icon || ""}
      >
        {forecast && <ForecastText forecast={forecast} />}
        {forecast && <ForecastIconDisplay forecast={forecast} />}
      </WidgetContainer>
    </Theme>
  );
}

export default App;

const WidgetContainer = styled.div<{ backgroundImage: string; icon: string }>`
  position: relative;
  width: 480px;
  height: 260px;
  background: linear-gradient(
    ${(props) => lighten(0.15, props.theme.background)},
    ${(props) => props.theme.background}
  );
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.icon.includes("night")
        ? rgba(0, 0, 0, 0.5)
        : props.icon.includes("snow")
        ? rgba(255, 255, 255, 0.2)
        : "transparent"};
    position: absolute;
    top: 0;
    left: 0;
  }
`;
