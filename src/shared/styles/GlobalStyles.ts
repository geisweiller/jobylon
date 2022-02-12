import { createGlobalStyle } from 'styled-components';
import { breakpoints, colors, fonts } from './theme';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${fonts.family.primary};


  button, a {
    outline: none;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }
};

/* html {
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 80%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 70%;
  }
  @media (max-width: ${breakpoints.mobileMd}) {
    font-size: 60%;
  }
} */

html, body, #root {
  height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
  }
}
#root {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundDark};
}
`;
