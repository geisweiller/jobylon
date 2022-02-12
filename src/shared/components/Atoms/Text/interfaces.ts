import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IText
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  weight?: 'light' | 'regular' | 'bold';
  size?: 'small' | 'medium' | 'large';
}
