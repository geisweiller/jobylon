import styled from 'styled-components';
import { colors } from '../../../styles/theme';

export const SelectContainer = styled.div`
  border: 1px solid ${colors.border};
  background-color: ${colors.clear};
  border-radius: 10px;
  padding: 8px;

  min-width: 200px;
`;

export const CustomSelect = styled.select`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: ${colors.clear};
`;
