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

html, body, #root {

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
  }
  height: 100vh;
}
#root {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundDark};
}
`;
