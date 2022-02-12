import styled from 'styled-components';
import { colors } from '../../../styles/theme';

export const CustomTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${colors.lightBlue};
  opacity: 0.8;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);

  min-width: 100px;
  max-width: 110px;

  p {
    color: ${colors.clear};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
