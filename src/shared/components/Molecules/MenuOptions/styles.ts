import styled, { css } from 'styled-components';
import { breakpoints, colors, fonts } from '../../../styles/theme';
import { IOptionStyles } from './interfaces';

export const OptionsContainer = styled.div``;

export const OptionsList = styled.ul`
  list-style: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

const optionModifiers = {
  selected: () => css`
    border-radius: 10px;
    background-color: ${colors.selected};
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.1);
    color: ${colors.lightBlue};

    transition: all 0.2s ease-in-out;

    svg path,
    svg circle {
      stroke: ${colors.lightBlue};
    }
  `,
};

export const Option = styled.li<IOptionStyles>`
  display: flex;
  padding: 20px;
  margin-bottom: 10px;
  font-size: ${fonts.size.sm};
  font-weight: ${fonts.weight.bold};
  color: ${colors.text};

  align-items: center;
  justify-content: start;
  

  cursor: pointer;

  border-bottom: 1px solid ${colors.border};

  ${({ selected }) => css`
    ${selected && optionModifiers.selected} }
  `}}

  :hover {
    border-radius: 10px;
    background-color: ${colors.selected};
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-right: 10px;
  } 

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${fonts.size.xs};
    svg {
      display: none;
    }
  }
`;
