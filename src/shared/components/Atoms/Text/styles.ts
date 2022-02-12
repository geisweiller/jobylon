import styled, { css } from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { IText } from './interfaces';

const textModifiers = {
  sizes: {
    small: () => css`
      font-size: ${fonts.size.sm};
    `,
    medium: () => css`
      font-size: ${fonts.size.md};
    `,
    large: () => css`
      font-size: ${fonts.size.lg};
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
