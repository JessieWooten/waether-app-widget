import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { clearDay } from "./themeStyles";
import { ITheme } from "./ITheme";
// import Roboto from "./fonts/roboto.woff2";

const GlobalStyle = createGlobalStyle<{ themeStyles: ITheme }>`
  *,
  *:before,
  *:after,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 12px;
    letter-spacing: 0.02rem;
  }
  body {
    display: flex;
    align-items: center; 
    justify-content: center;
    background: white;
    font-size: 12px;
    color: ${(props) => props.themeStyles.textColor};
  }

`;

interface IThemeWrapperProps {
  children: React.ReactChild | React.ReactChildren | React.ReactNode;
  themeStyles?: ITheme;
}

const Theme: React.FC<IThemeWrapperProps> = ({
  children,
  themeStyles = clearDay,
}) => (
  <ThemeProvider theme={themeStyles}>
    <GlobalStyle themeStyles={themeStyles} />
    {children}
  </ThemeProvider>
);

export default Theme;
