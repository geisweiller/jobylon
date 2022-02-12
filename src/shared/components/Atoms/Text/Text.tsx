import React from 'react';
import { IText } from './interfaces';

import * as S from './styles';

const Text: React.FC<IText> = ({ weight = 'regular', size = 'medium', children, ...props }) => {
  return (
    <S.CustomText weight={weight} size={size} className={props.className}>
      {children}
    </S.CustomText>
  );
};

export default Text;
