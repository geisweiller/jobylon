import React from 'react';
import { Atoms } from '../..';
import { Assets } from '../../../../assets';

import * as S from './styles';

const EmptyList: React.FC = () => {
  return (
    <S.EmptyListContainer>
      <Atoms.Text size="small" weight="bold">
        Sorry, no search results found...
      </Atoms.Text>
      <Assets.NoData />
    </S.EmptyListContainer>
  );
};

export default EmptyList;
