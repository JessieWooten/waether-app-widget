import React from "react";
import styled from "styled-components";
import { VerticalCenterRightContent } from "./base/Position";
import { Signature } from "./base/Typography";
import CameraIcon from "./base/CameraIcon";

interface IProps {
  photographer?: string;
}

const PhotoCred: React.FC<IProps> = ({ photographer }) => {
  return photographer ? (
    <CredWrapper>
      <CameraIcon size={8} color="rgba(255,255,255,.5)" />
      <Signature style={{ paddingLeft: ".5rem" }}>{photographer}</Signature>
    </CredWrapper>
  ) : null;
};

export default PhotoCred;

const CredWrapper = styled(VerticalCenterRightContent)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  opacity: 0.7;
`;
