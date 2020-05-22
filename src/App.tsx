import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { lighten, rgba } from "polished";
import { IForecast, IForecastImage } from "./models/Forecast";
import {
  fetchForecastByLocationName,
  fetchForecastByCoordinates,
  getBrowserLocation,
} from "./api/WeatherServiceApi";
import Theme from "./themes/ThemeWrapper";
import fetchThemeByName from "./themes/utils/fetchThemeByName";
import ForecastText from "./components/ForecastText";
import ForecastIconDisplay from "./components/ForecastIconDisplay";
import SettingsPage from "./components/SettingsPage";
import SettingsDots from "./components/SettingsDots";

function App() {
  let location = window.localStorage.getItem("wwjw-location");
  const [forecast, setForecast] = useState<IForecast | undefined>(undefined);
  const [image, setImage] = useState<IForecastImage | undefined>(undefined);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCelcius, setIsCelcius] = useState(
    window.localStorage.getItem("wwjw-celcius") === "true"
  );
  const updateLocation = (newLocation: string) => {
    window.localStorage.setItem("wwjw-location", newLocation);
    location = newLocation;
  };
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    (async () => {
      try {
        setErrorMessage("");
        let forecastResponse;
        if (location)
          forecastResponse = await fetchForecastByLocationName(location);
        else {
          const coords = await getBrowserLocation();
          forecastResponse = await fetchForecastByCoordinates(
            coords.latitude,
            coords.longitude
          );
        }
        setForecast(forecastResponse.forecast);
        setImage(forecastResponse.image);
      } catch (e) {
        setErrorMessage(e);
        console.error(e);
      }
    })();
  }, [location]);
  const themeStyles = forecast ? fetchThemeByName(forecast.icon) : undefined;
  return (
    <Theme themeStyles={themeStyles}>
      <WidgetContainer
        className="App"
        backgroundImage={image?.imgUrl || "#"}
        icon={forecast?.icon || ""}
      >
        {forecast && <ForecastText isCelcius={isCelcius} forecast={forecast} />}
        {forecast && <ForecastIconDisplay forecast={forecast} />}
        {isSettingsOpen ? (
          <SettingsPage
            isCelcius={isCelcius}
            toggleIsCelcius={() => setIsCelcius(!isCelcius)}
            closePage={() => setIsSettingsOpen(false)}
            updateLocation={updateLocation}
          />
        ) : (
          <SettingsDots onClick={() => setIsSettingsOpen(true)} />
        )}
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
    pointer-events: none;
    content: "";
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.icon.includes("night")
        ? rgba(0, 0, 0, 0.5)
        : props.icon.includes("snow")
        ? rgba(255, 255, 255, 0.2)
        : rgba(props.theme.background, 0.3)};
    position: absolute;
    top: 0;
    left: 0;
  }
`;
