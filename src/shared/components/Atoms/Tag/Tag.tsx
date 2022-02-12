import React from 'react';
import { Text } from '..';

import * as S from './styles';

const Tag: React.FC = ({ children }) => {
  return (
    <S.CustomTag>
      <Text size="small">{children}</Text>
    </S.CustomTag>
  );
};

export default Tag;
