import React from "react";
import styled from "styled-components";
import {
  VerticalCenterContent,
  VerticalCenterSpaceBetween,
} from "./base/Position";
import { Heading } from "./base/Typography";
import { Input, Button } from "./base/FormElements";
import { WiDirectionRight } from "weather-icons-react";
import ToggleSwitch from "./base/ToggleSwitch";
import useSettings from "../hooks/useSettings";
import useGeolocation from "../hooks/useGeolocation";
import { MoonLoader } from "./Loaders";

export interface IProps {
  isCelcius: boolean;
  toggleIsCelcius: () => void;
  closePage: () => void;
  updateLocation: (newLocation: string) => void;
}

const Settings: React.FC<IProps> = ({
  isCelcius,
  toggleIsCelcius,
  closePage,
  updateLocation,
}) => {
  const geolocation = useGeolocation();
  const settings = useSettings({
    isCelcius,
    toggleIsCelcius,
    closePage,
    updateLocation,
  });
  const handleUseBrowserLocation = async () => {
    const { latitude, longitude } = await geolocation.getLocationFromBrowser();
    console.log(latitude, longitude);
    updateLocation(JSON.stringify({ latitude, longitude }));
    closePage();
  };
  return (
    <SettingsPage inView={settings.inView}>
      <HeadingWrapper>
        <Heading>Your Location</Heading>
        <WiDirectionRight size={36} onClick={settings.handleClose} />
      </HeadingWrapper>
      <Input
        placeholder="Enter your location"
        value={settings.location}
        onChange={(event: any) => settings.setLocation(event?.target?.value)}
      />
      <VerticalCenterContent style={{ marginBottom: "1rem" }}>
        <Button
          onClick={settings.handleNewLocation}
          disabled={settings.location.trim() === "" || geolocation.isLoading}
        >
          Update Location
        </Button>
        <Button
          onClick={handleUseBrowserLocation}
          disabled={geolocation.isDenied() || geolocation.isLoading}
          style={{ marginLeft: "1rem" }}
        >
          {geolocation.isLoading ? (
            <MoonLoader overlayColor="#3b4451" />
          ) : (
            "Use Broswser Location"
          )}
        </Button>
      </VerticalCenterContent>

      <VerticalCenterContent>
        <Unit isSelected={isCelcius}>˚C</Unit>
        <ToggleSwitch isActive={!isCelcius} onToggle={toggleIsCelcius} />
        <Unit isSelected={!isCelcius}>˚F</Unit>
      </VerticalCenterContent>
    </SettingsPage>
  );
};

export default Settings;

const SettingsPage = styled.div<{ inView: Boolean }>`
  padding: 2rem;
  background: #3b4451;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  overflow-y: auto;
  transition: 0.2s;
  transition-timing-function: ease-in-out;
  transform: translate3d(${(props) => (props.inView ? "0,0,0" : "101%, 0, 0")});
`;

const HeadingWrapper = styled(VerticalCenterSpaceBetween)`
  & svg {
    &:hover {
      fill: #ffd151;
    }
  }
`;

const Unit = styled.span<{ isSelected: boolean }>`
  padding: 0 0.5rem;
  opacity: ${(props) => (props.isSelected ? 1 : 0.3)};
  font-size: 1.2rem;
  font-weight: ${(props) => (props.isSelected ? 700 : 400)};
`;
