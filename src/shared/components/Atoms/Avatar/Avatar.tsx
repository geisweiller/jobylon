import React from 'react';
import { profile } from '../../../../assets/images';
import { IAvatar } from './interfaces';

import * as S from './styles';

const Avatar: React.FC<IAvatar> = ({ alt, size = 'large', src }) => {
  return <S.CustomAvatar src={src || profile} alt={alt} size={size} />;
};

export default Avatar;
