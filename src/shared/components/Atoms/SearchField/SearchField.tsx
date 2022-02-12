import React, { useCallback, useRef } from 'react';
import { Assets } from '../../../../assets';

import { ISearchField } from './interfaces';

import * as S from './styles';

const SearchField: React.FC<ISearchField> = ({ handleSearch, placeholder, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = useCallback(() => {
    if (inputRef.current) {
      !!inputRef.current.value && handleSearch(inputRef.current.value);
      inputRef.current.value = '';
    }
  }, [inputRef.current, handleSearch]);

  return (
    <S.InputContainer data-testid="searchfield_container">
      <Assets.Search />
      <S.CustomInput
        ref={inputRef}
        data-testid="searchfield_input"
        placeholder={placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <S.SearchButton onClick={handleOnClick} data-testid="searchfield_button">
        Search
      </S.SearchButton>
    </S.InputContainer>
  );
};

export default SearchField;
