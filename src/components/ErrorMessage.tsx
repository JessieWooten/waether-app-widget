import React from "react";
import styled from "styled-components";
import { WiRefresh } from "weather-icons-react";
import { CenterContent } from "./base/Position";
import ErrorIcon from "./base/ErrorIcon";
import { Heading, Text } from "./base/Typography";
import { Button } from "./base/FormElements";
import { BlurInTop } from "./Animation";

export interface IProps {
  errorMessage?: string;
  retry: () => void;
}

const ErrorMessage: React.FC<IProps> = ({ retry, errorMessage }) => {
  return (
    <ErrorWrapper style={{ zIndex: 10 }}>
      <BlurInTop>
        <IconHalo>
          <ErrorIcon size={48} />
        </IconHalo>
        <Heading>There seems to be an issue.</Heading>
        <Text>{errorMessage}</Text>
        <Button onClick={retry}>
          Retry <WiRefresh size={24} />
        </Button>
      </BlurInTop>
    </ErrorWrapper>
  );
};

export default ErrorMessage;

const ErrorWrapper = styled(CenterContent)`
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

const IconHalo = styled(CenterContent)`
  background: ${(props) => props.theme.background};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 1;
`;
