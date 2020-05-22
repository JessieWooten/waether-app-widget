import React from "react";
import styled from "styled-components";
import { MoonLoader } from "../Loaders";
import { BlurIn } from "../Animation";
import { CenterContent } from "../base/Position";
import { Text } from "../base/Typography";
import { darken } from "polished";

const LoadingView: React.FC = () => {
  return (
    <LoaderWrapper>
      <FullSizeWrapper>
        <BlurIn>
          <MoonGlow size={"36px"}>
            <MoonLoader size={"36px"} overlayColor="#3b4451" />
          </MoonGlow>
          <LoadingText>Loading...</LoadingText>
        </BlurIn>
      </FullSizeWrapper>
    </LoaderWrapper>
  );
};

export default LoadingView;

const LoaderWrapper = styled.div`
  padding: 2rem;
  background: linear-gradient(#3b4451, ${(props) => darken(0.15, "#3b4451")});
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 26;
  overflow-y: auto;
  transition: 0.2s;
`;

const LoadingText = styled(Text)`
  padding-top: 1rem;
`;

const FullSizeWrapper = styled(CenterContent)`
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

const MoonGlow = styled(CenterContent)<{ size: string }>`
  border-radius: 50%;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.7);
`;
