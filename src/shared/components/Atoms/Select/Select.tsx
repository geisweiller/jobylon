import React from 'react';

import * as S from './styles';
import { ISelect } from './interfaces';

const Select: React.FC<ISelect> = ({ options, onChange }) => {
  return (
    <S.SelectContainer data-testid="select-container">
      <S.CustomSelect
        onChange={(e) => onChange(e.currentTarget.value)}
        defaultValue=""
        data-testid="select"
      >
        <option value="" hidden data-testid="default-option">
          Sort by...
        </option>
        {options.map(({ label, value }) => {
          return (
            <option key={value} value={value} data-testid="select-option">
              {label}
            </option>
          );
        })}
      </S.CustomSelect>
    </S.SelectContainer>
  );
};

export default Select;
