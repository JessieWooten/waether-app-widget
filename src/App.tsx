import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IForecast } from "./models/Forecast";
import { fetchForecastByLocationName } from "./api/WeatherServiceApi";
import Theme from "./themes/ThemeWrapper";

function App() {
  const [forecast, setForecast] = useState<IForecast | undefined>(undefined);
  // const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const forecast = await fetchForecastByLocationName("nashville,tn");
        setForecast(forecast);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <Theme>
      <WidgetContainer className="App">
        {JSON.stringify(forecast)}
      </WidgetContainer>
    </Theme>
  );
}

export default App;

const WidgetContainer = styled.div`
  max-width: 500px;
  height: 280px;
  background: ${(props) => props.theme.backgroundColor};
  padding: 24px;
  border-radius: 20px;
  overflow: hidden;
`;
