import React from "react";

interface IProps {
  temperature: string
}
const WeatherText: React.FC<IProps> = ({ temperature }) => {
  return <div>{temperature}</div>;
};

export default WeatherText;
