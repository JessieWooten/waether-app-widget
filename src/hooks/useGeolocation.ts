import { useState } from "react";

export enum GeolocationPermission {
  GRANTED = "granted",
  PROMPT = "prompt",
  DENIED = "denied",
}
export type GeolocationPermissionType = GeolocationPermission | undefined;

const useGeolocation = () => {
  const [permissionStatus, setPermissionStatus] = useState<any>(undefined);
  const checkPermission = async () => {
    try {
      const status = await navigator.permissions.query({ name: "geolocation" });
      setPermissionStatus(status);
      return status;
    } catch (e) {
      console.error("Couldn't check for permissions");
    }
  };
  const isGranted = (): boolean => {
    return permissionStatus === GeolocationPermission.GRANTED;
  };
  const isDenied = (): boolean => {
    return permissionStatus === GeolocationPermission.DENIED;
  };
  const getLocationFromBrowser = async (): Promise<Coordinates> => {
    return await getBrowserLocation();
  };

  function getBrowserLocation(): Promise<Coordinates> {
    return new Promise((resolve, reject) => {
      if (
        !navigator ||
        !navigator.geolocation ||
        !navigator.geolocation.getCurrentPosition
      ) {
        return reject("Couldn't find getCurrentPosition on browser window");
      }
      const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      };
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => resolve(coords),
        reject,
        options
      );
    });
  }
  return {
    getLocationFromBrowser,
    checkPermission,
    isGranted,
    isDenied,
  };
};

export default useGeolocation;
