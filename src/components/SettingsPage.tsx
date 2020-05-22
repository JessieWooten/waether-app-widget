import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  VerticalCenterContent,
  VerticalCenterSpaceBetween,
} from "./base/Position";
import { Heading } from "./base/Typography";
import { Input, Button } from "./base/FormElements";
import { WiDirectionRight } from "weather-icons-react";
import ToggleSwitch from "./base/ToggleSwitch";

interface IProps {
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
  const [location, setLocation] = useState(
    window.localStorage.getItem("wwjw-location") || ""
  );
  const [inView, setInView] = useState(false);
  useEffect(() => setInView(true), []);

  const handleClose = (): void => {
    setInView(false);
    setTimeout(closePage, 300);
  };

  const handleNewLocation = (): void => {
    updateLocation(location);
    handleClose();
  };

  return (
    <SettingsPage inView={inView}>
      <HeadingWrapper>
        <Heading>Your Location</Heading>
        <WiDirectionRight size={36} onClick={handleClose} />
      </HeadingWrapper>
      <Input
        placeholder="Enter your location"
        value={location}
        onChange={(event: any) => setLocation(event?.target?.value)}
      />
      <VerticalCenterContent style={{ marginBottom: "1rem" }}>
        <Button onClick={handleNewLocation} disabled={location.trim() === ""}>
          Update Location
        </Button>
        <Button
          onClick={() => updateLocation(location)}
          disabled={location.trim() === ""}
          style={{ marginLeft: "1rem" }}
        >
          Use Broswser Location
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
