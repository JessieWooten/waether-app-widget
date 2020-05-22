import React from "react";
import styled from "styled-components";
import { CenterContent } from "./base/Position";

interface IProps {
  onClick: () => void;
}

const SettingsDots: React.FC<IProps> = ({ onClick }) => (
  <DotsContainer aria-label="settings-dots" onClick={onClick}>
    <Dot />
    <Dot />
    <Dot />
  </DotsContainer>
);

export default SettingsDots;

const Dot = styled.div`
  height: 4px;
  width: 4px;
  margin-bottom: 2px;
  border-radius: 50%;
  background: white;
  transition: 0.2s;
`;

const DotsContainer = styled(CenterContent)`
  cursor: pointer;
  padding: 1rem;
  flex-direction: column;
  position: absolute;
  top: 1rem;
  right: 1rem;
  &:hover div {
    background: #ffe700;
    height: 5px;
    width: 5px;
  }
`;
