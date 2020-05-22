import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IForecast, IForecastImage } from "./models/Forecast";
import { fetchForecastByLocationName } from "./api/WeatherServiceApi";
import Theme from "./themes/ThemeWrapper";
import fetchThemeByName from "./themes/utils/fetchThemeByName";
import ForecastText from "./components/ForecastText";
import ForecastIconDisplay from "./components/ForecastIconDisplay";
import { rgba, darken } from "polished";

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
      <WidgetContainer className="App" backgroundImage={image?.imgUrl || "#"}>
        {forecast && <ForecastText forecast={forecast} />}
        {forecast && <ForecastIconDisplay forecast={forecast} />}
      </WidgetContainer>
    </Theme>
  );
}

export default App;

const WidgetContainer = styled.div<{ backgroundImage: string }>`
  position: relative;
  width: 480px;
  height: 260px;
  background: ${(props) => props.theme.background};
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;
