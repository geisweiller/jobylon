import styled from 'styled-components';
import { breakpoints, colors, fonts } from '../../../styles/theme';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.border};
  border-radius: 10px;
  padding-left: 10px;
`;

export const CustomInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin-left: 10px;
  padding: 10px;

  ::placeholder {
    color: ${colors.text};
    font-size: ${fonts.size.sm};

    @media (max-width: ${breakpoints.mobile}) {
      font-size: ${fonts.size.xs};
    }
  }
`;

export const SearchButton = styled.button`
  background-color: ${colors.lightBlue};
  width: 100px;
  height: 100%;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  color: ${colors.clear};
  font-weight: bold;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${fonts.size.xs};
  }
`;
