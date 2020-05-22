import styled from "styled-components";

interface IProps {
  size?: string;
  color?: string;
  overlayColor?: string;
}
export const MoonLoader = styled.div<IProps>`
  display: block;
  height: ${(props) => props.size || "24px"};
  width: ${(props) => props.size || "24px"};
  border-radius: 50%;
  background: transparent;
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border-radius: 50%;
    background: ${(props) => props.color || "#ffffff"};
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${(props) => props.overlayColor || "black"};
    animation: slideAcross;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes slideAcross {
    from {
      transform: translate3d(110%, 0, 0);
    }
    to {
      transform: translate3d(-110%, 0, 0);
    }
  }
`;
