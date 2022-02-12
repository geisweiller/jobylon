import styled, { css } from 'styled-components';
import { IAvatar } from './interfaces';

const avatarModifiers = {
  small: () => css`
    width: 30px;
    height: 30px;
  `,
  medium: () => css`
    width: 40px;
    height: 40px;
  `,
  large: () => css`
    width: 50px;
    height: 50px;
  `,
};

export const CustomAvatar = styled.img<IAvatar>`
  ${({ size }) => css`
    ${!!size && avatarModifiers[size]()}
  `}

  border-radius: 50%;
`;
