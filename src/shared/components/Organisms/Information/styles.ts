import styled from 'styled-components';
import { breakpoints, colors, fonts, maxHeight } from '../../../styles/theme';
import { IInformationStyles } from './interfaces';

export const InformationContainer = styled.div<IInformationStyles>`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 0 20px;
  background-color: ${colors.clear};
  border-radius: 20px;

  max-height: ${maxHeight.medium};

  border: 1px solid ${colors.border};

  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.hide &&
    `
    display: none;
  `}

  @media (max-width: ${breakpoints.tablet}) {
    max-height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const InformationHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid ${colors.border};

  min-height: 200px;

  p {
    text-align: center;
  }
`;

export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  height: 460px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 300px;
  }
`;

export const InformationFooter = styled.div`
  border-top: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  height: 100px;
  width: 100%;
`;

export const SkillsContainer = styled.div`
  padding: 10px 5px;
  h5 {
    text-align: start;
    margin-bottom: 10px;
  }
  height: 95%;
`;

export const SkillInformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  overflow-y: scroll;
  height: inherit;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.border};
    border-radius: 10px;
  }

  ul {
    list-style-position: inside;
    margin: 0;
    list-style-type: none;
  }

  p,
  strong,
  li {
    font-size: ${fonts.size.sm};
    text-align: start;
  }

  p,
  li {
    padding: 5px;
  }
`;
