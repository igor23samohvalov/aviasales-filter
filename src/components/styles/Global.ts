import { createGlobalStyle } from "styled-components";

export const styledTheme = {
  primaryColor: "#2096F3",
  secondaryColor: "#FF6D00",
  hoverPrimaryColor: "#d4f2fc",
  hoverSecondaryColor: "#FF8123",
  whiteColor: "#fff",
  fontPrimaryColor: "#4A4A4A",
  fontLightColor: "#A8AFB1",
  bgColor: "#d7e3ee",
  fwMedium: 500,
  shadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
};

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background-color: ${styledTheme.bgColor}};
  };

  * {
    color: ${styledTheme.fontPrimaryColor};
  };
`;
