import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/theme';

export const TemplateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  width: 100vw;

  align-items: center;

  padding: 10px;
  max-width: 1400px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;
