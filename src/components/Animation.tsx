import styled from "styled-components";

export const BlurIn = styled.div<{ duration?: string; delay?: string }>`
  animation: blurIn;
  animation-timing-function: ease-in-out;
  animation-delay: ${(props) => props.delay || 0};
  animation-duration: ${(props) => props.duration || "400ms"};
  animation-fill-mode: both;
  @keyframes blurIn {
    from {
      filter: blur(4px);
      opacity: 0;
    }
    to {
      filter: blur(0);
      opacity: 1;
    }
  }
`;
export const BlurInTop = styled.div<{ duration?: string; delay?: string }>`
  animation: blurIn;
  animation-timing-function: ease-in-out;
  animation-delay: ${(props) => props.delay || 0};
  animation-duration: ${(props) => props.duration || "400ms"};
  animation-fill-mode: both;
  @keyframes blurIn {
    from {
      filter: blur(4px);
      opacity: 0;
      transform: translate3d(0, -40%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      filter: blur(0);
      opacity: 1;
    }
  }
`;
export const BlurInLeft = styled.div<{ duration?: string; delay?: string }>`
  animation: blurIn;
  animation-timing-function: ease-in-out;
  animation-delay: ${(props) => props.delay || 0};
  animation-duration: ${(props) => props.duration || "400ms"};
  animation-fill-mode: both;
  @keyframes blurIn {
    from {
      filter: blur(4px);
      opacity: 0;
      transform: translate3d(-40%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      filter: blur(0);
      opacity: 1;
    }
  }
`;
export const BlurInRight = styled.div<{ duration?: string; delay?: string }>`
  animation: blurIn;
  animation-timing-function: ease-in-out;
  animation-delay: ${(props) => props.delay || 0};
  animation-duration: ${(props) => props.duration || "400ms"};
  animation-fill-mode: both;
  @keyframes blurIn {
    from {
      filter: blur(4px);
      opacity: 0;
      transform: translate3d(40%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      filter: blur(0);
      opacity: 1;
    }
  }
`;
