import React from "react";
import styled from "styled-components";
import { lighten, rgba } from "polished";
import Theme from "./themes/ThemeWrapper";
import fetchThemeByName from "./themes/utils/fetchThemeByName";
import ForecastText from "./components/ForecastText";
import ForecastIconDisplay from "./components/ForecastIconDisplay";
import SettingsPage from "./components/SettingsPage";
import SettingsDots from "./components/SettingsDots";
import ErrorMessage from "./components/ErrorMessage";
import useWeatherApp from "./hooks/useWeatherApp";
import { ForecastIcon } from "./models/Forecast";
import { Heading } from "./components/base/Typography";

function App() {
  const weatherApp = useWeatherApp();
  const resetAppState = () => {
    window.localStorage.removeItem("wwjw-location");
    weatherApp.setForecast(undefined);
    weatherApp.setErrorMessage("");
  };
  // TODO: Error handling
  // LOADER
  // TESTS

  const themeStyles = fetchThemeByName(
    weatherApp.errorMessage ? ForecastIcon.ERROR : weatherApp.forecast?.icon
  );

  return (
    <Theme themeStyles={themeStyles}>
      <WidgetContainer
        className="App"
        backgroundImage={weatherApp.image?.imgUrl || "#"}
        icon={weatherApp.forecast?.icon || ""}
      >
        {/* open setting prompt */}
        {/* {(weatherApp.location === "" || weatherApp.location === undefined) && (
          <Heading>Please enter a location.</Heading>
        )} */}
        {/* ERROR MESSAGE */}
        {weatherApp.errorMessage && (
          <ErrorMessage
            retry={resetAppState}
            errorMessage={weatherApp.errorMessage}
          />
        )}
        {/* FORECAST TEXT */}
        {weatherApp.forecast !== undefined && (
          <ForecastText
            isCelcius={weatherApp.isCelcius}
            forecast={weatherApp.forecast || {}}
          />
        )}
        {/* FORECAST ICON DISPLAY */}
        {weatherApp.forecast !== undefined && (
          <ForecastIconDisplay forecast={weatherApp.forecast} />
        )}
        {/* SETTINGS */}
        {weatherApp.isSettingsOpen ? (
          <SettingsPage
            isCelcius={weatherApp.isCelcius}
            toggleIsCelcius={() =>
              weatherApp.setIsCelcius(!weatherApp.isCelcius)
            }
            closePage={() => weatherApp.setIsSettingsOpen(false)}
            updateLocation={weatherApp.updateLocation}
          />
        ) : (
          <SettingsDots onClick={() => weatherApp.setIsSettingsOpen(true)} />
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
  transition: 300ms;
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
