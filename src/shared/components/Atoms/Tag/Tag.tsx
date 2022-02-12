import React from 'react';
import { Text } from '..';

import * as S from './styles';

const Tag: React.FC = ({ children }) => {
  return (
    <S.CustomTag data-testid="tag">
      <Text size="small">{children}</Text>
    </S.CustomTag>
  );
};

export default Tag;
