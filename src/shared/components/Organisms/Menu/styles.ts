import styled from 'styled-components';
import { breakpoints, colors, maxHeight } from '../../../styles/theme';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  padding: 0 10px;
  max-height: ${maxHeight.medium};

  background-color: ${colors.clear};

  border-radius: 20px;

  border: 1px solid ${colors.border};

  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  border-bottom: 1px solid ${colors.border};

  padding: 20px 0;

  height: 200px;
  width: 100%;

  svg {
    align-self: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: row;
    height: auto;

    svg {
      align-self: flex-start;
    }
  }
`;

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0 20px;
  align-items: center;
  justify-content: start;

  div {
    margin-left: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    div {
      display: none;
    }
  }
`;
