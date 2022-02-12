import styled, { css } from 'styled-components';
import { breakpoints, colors, fonts } from '../../../styles/theme';
import { IText } from './interfaces';

const textModifiers = {
  sizes: {
    small: () => css`
      font-size: ${fonts.size.sm};
      @media (max-width: ${breakpoints.mobileMd}) {
        font-size: ${fonts.size.xs};
      }
    `,
    medium: () => css`
      font-size: ${fonts.size.md};
      @media (max-width: ${breakpoints.mobileMd}) {
        font-size: ${fonts.size.sm};
      }
    `,
    large: () => css`
      font-size: ${fonts.size.lg};
      @media (max-width: ${breakpoints.mobileMd}) {
        font-size: ${fonts.size.md};
      }
    `,
  },
  weight: {
    light: () => css`
      font-weight: ${fonts.weight.light};
    `,
    regular: () => css`
      font-weight: ${fonts.weight.regular};
    `,
    bold: () => css`
      font-weight: ${fonts.weight.bold};
    `,
  },
};

export const CustomText = styled.p<IText>`
  ${({ size, weight }) => css`
    ${!!size && textModifiers.sizes[size]()}
    ${!!weight && textModifiers.weight[weight]()}
  `}

  color: ${colors.text};
  text-align: start;
`;
