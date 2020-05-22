import React from "react";
import SettingsDots from "../SettingsDots";
import SettingsPage from "../SettingsPage";

interface IProps {
  isSettingsOpen: boolean;
  isCelcius: boolean;
  setIsCelcius: (b: boolean) => void;
  setIsSettingsOpen: (b: boolean) => void;
  updateLocation: (l: string) => void;
}
const SettingsView: React.FC<IProps> = ({
  isSettingsOpen,
  isCelcius,
  setIsCelcius,
  setIsSettingsOpen,
  updateLocation,
}) =>
  isSettingsOpen ? (
    <SettingsPage
      isCelcius={isCelcius}
      toggleIsCelcius={() => setIsCelcius(!isCelcius)}
      closePage={() => setIsSettingsOpen(false)}
      updateLocation={updateLocation}
    />
  ) : (
    <SettingsDots onClick={() => setIsSettingsOpen(true)} />
  );

export default SettingsView;
