import { useState, useEffect } from "react";
import { IProps } from "../components/SettingsPage";

const useSettings = (props: IProps) => {
  const [location, setLocation] = useState(
    window.localStorage.getItem("wwjw-location") || ""
  );
  const [inView, setInView] = useState(false);
  useEffect(() => setInView(true), []);

  const handleClose = (): void => {
    setInView(false);
    setTimeout(props.closePage, 300);
  };

  const handleNewLocation = (): void => {
    props.updateLocation(location);
    handleClose();
  };

  return {
    location,
    setLocation,
    inView,
    setInView,
    handleClose,
    handleNewLocation,
  };
};

export default useSettings;
