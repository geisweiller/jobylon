import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightBlue};
  padding: 12px 20px;

  width: 100%;

  border-radius: 10px;
  color: ${colors.clear};
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.bold};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
