import React from "react";
import styled from "styled-components";

interface IProps {
  isActive: boolean;
  disabled?: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<IProps> = ({ isActive, disabled, onToggle }) => (
  <>
    <Input type="checkbox" checked={isActive} readOnly />
    <Label onClick={onToggle}>Toggle</Label>
  </>
);

export default ToggleSwitch;

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + label {
    background: #7987a2;
    &:after {
      left: calc(100%);
      transform: translateX(-100%);
    }
  }
`;

const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 40px;
  height: 10px;
  background: grey;
  display: inline-block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: -5px;
    left: -2px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
    &:after {
      width: 130px;
    }
  }
`;
