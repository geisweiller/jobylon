import React from 'react';
import { Assets } from '../../assets';
import { Atoms } from '../../shared/components';

import * as S from './styles';

const NotFound: React.FC = () => {
  return (
    <S.Container data-testid="not_found_container">
      <Atoms.Text weight="bold" size="small">
        Sorry, the page you are looking for does not exist.
      </Atoms.Text>
      <Assets.NotFound />
    </S.Container>
  );
};

export default NotFound;
