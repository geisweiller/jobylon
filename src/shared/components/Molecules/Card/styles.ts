import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles/theme';
import { ICardStyles } from './interfaces';

export const CardContainer = styled.button<ICardStyles>`
  background-color: ${colors.clear};
  display: grid;

  grid-template-columns: 1fr 2fr 2fr;
  gap: 10px;

  padding: 15px;
  width: 100%;
  border: 3px solid transparent;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  &:hover {
    opacity: 0.8;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
  }

  ${({ selected }) =>
    selected &&
    `
    border: 3px solid ${colors.lightBlue};
    background-color: ${colors.selected};
    `}

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const CardInformations = styled.div`
  display: grid;
  gap: 10px;
  height: 100%;

  justify-content: space-between;
  align-items: flex-start;

  padding: 0 5px;

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;
