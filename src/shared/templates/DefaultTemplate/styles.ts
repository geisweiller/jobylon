import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';

export const TemplateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  width: 100%;
  height: 100%;

  align-items: center;

  padding: 10px;
  max-width: 1400px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;
