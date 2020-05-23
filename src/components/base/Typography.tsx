import styled from "styled-components";

export const Temperature = styled.h2`
  font-size: 10rem;
  line-height: 10rem;
  font-weight: 200;
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0.5rem 0;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  padding: 0 0 0.5rem 0;
`;
export const Signature = styled.p`
  font-size: 1rem;
  font-weight: 100;
`;

export const Divider = styled.hr`
  display: block;
  height: 1px;
  border: none;
  width: 100%;
  background: ${(props) => props.theme.textColor};
  opacity: 0.3;
  margin: 0 0 0.5rem 0;
`;
