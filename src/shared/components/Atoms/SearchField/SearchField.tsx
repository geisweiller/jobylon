import React, { useCallback, useRef } from 'react';
import { Assets } from '../../../../assets';

import { ISearchField } from './interfaces';

import * as S from './styles';

const SearchField: React.FC<ISearchField> = ({ handleSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = useCallback(() => {
    if (inputRef.current) {
      !!inputRef.current.value && handleSearch(inputRef.current.value);
      inputRef.current.value = '';
    }
  }, [inputRef.current, handleSearch]);

  return (
    <S.InputContainer data-testid="searchfield-container">
      <Assets.Search />
      <S.CustomInput
        ref={inputRef}
        data-testid="searchfield-input"
        placeholder="Search by job title, company..."
      />
      <S.SearchButton onClick={handleOnClick}>Search</S.SearchButton>
    </S.InputContainer>
  );
};

export default SearchField;
