import styled from "styled-components";

export const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  outline: none;
  height: 40px;
  display: block;
  width: 100%;
  color: white;
  font-weight: 500;
  margin-bottom: 1rem;
  &::placeholder {
    font-weight: 300;
    color: #ffffff;
    opacity: 0.3;
  }
`;

export const Button = styled.button`
  outline: none;
  height: 40px;
  width: 120px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #fcfcfc;
  background: transparent;
  cursor: pointer;
  color: #fcfcfc;
  transition: 0.2s;
  &:disabled {
    opacity: 0.3;
    pointer-events: none;
    &:hover {
      cursor: initial;
    }
  }
  &:hover {
    transform: translate3d(2px, 2px, 0);
    border: 1px solid #fcfcfc;
    background: #fcfcfc;
    color: #3b4451;
  }
`;
export const ButtonFill = styled(Button)`
  outline: none;
  height: 40px;
  width: 120px;
  border-radius: 4px;
  font-size: 1rem;
`;
