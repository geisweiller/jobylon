import React, { useCallback } from 'react';
import { Atoms } from '../..';
import { Assets } from '../../../../assets';
import { IEmptyList } from './interfaces';

import * as S from './styles';

const EmptyList: React.FC<IEmptyList> = ({ error }) => {
  const HandleEmptyContent = useCallback(() => {
    if (error) {
      return (
        <>
          <Atoms.Text size="small" weight="bold">
            Sorry, something went wrong. Please try again later.
          </Atoms.Text>
          <Assets.Error />
        </>
      );
    }
    return (
      <>
        <Atoms.Text size="small" weight="bold">
          Sorry, no search results found...
        </Atoms.Text>
        <Assets.NoData />
      </>
    );
  }, [error]);

  return (
    <S.EmptyListContainer data-testid="empty_list">
      <HandleEmptyContent />
    </S.EmptyListContainer>
  );
};

export default EmptyList;
