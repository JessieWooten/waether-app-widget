import { useState } from "react";

export enum GeolocationPermission {
  GRANTED = "granted",
  PROMPT = "prompt",
  DENIED = "denied",
}
export type GeolocationPermissionType = GeolocationPermission | undefined;

const useGeolocation = () => {
  const [permissionStatus, setPermissionStatus] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(false);
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

  const getBrowserLocation = (): Promise<Coordinates> => {
    return new Promise(async (resolve, reject) => {
      if (!navigator?.geolocation?.getCurrentPosition) {
        return reject("Couldn't find getCurrentPosition on browser window");
      }
      setIsLoading(true);
      await checkPermission();
      const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      };
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setIsLoading(false);
          return resolve(coords);
        },
        (e) => {
          setIsLoading(false);
          return reject(e);
        },
        options
      );
    });
  };
  return {
    getLocationFromBrowser,
    checkPermission,
    isGranted,
    isDenied,
    isLoading,
  };
};

export default useGeolocation;
