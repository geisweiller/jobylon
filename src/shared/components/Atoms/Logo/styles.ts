import styled, { css } from 'styled-components';
import { ILogo } from './interfaces';

const logoModifiers = {
  sizes: {
    medium: () => css`
      width: 60px;
      height: 60px;
    `,
    large: () => css`
      width: 80px;
      height: 80px;
    `,
  },
};

export const Logo = styled.img<Omit<ILogo, 'src'>>`
  ${({ size }) => css`
    ${!!size && logoModifiers.sizes[size]()}
  `}
  border-radius: 5px;
`;
