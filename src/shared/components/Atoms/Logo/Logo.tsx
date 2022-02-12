import React from 'react';
import { ILogo } from './interfaces';

import * as S from './styles';

const Logo: React.FC<ILogo> = ({ size = 'medium', src }) => {
  if (src) {
    return <S.Logo src={src} size={size} />;
  }
  return null;
};

export default Logo;
