import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { clearDay } from "./themeStyles";
import { ITheme } from "./ITheme";

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
  }
  body {
    font-family: ${(props) => props.themeStyles.fontFamily || "Roboto"};
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
