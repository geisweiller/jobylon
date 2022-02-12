import styled from 'styled-components';
import { breakpoints, colors } from '../../shared/styles/theme';

export const JobsPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: 10px;
  max-width: 1400px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;

  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
