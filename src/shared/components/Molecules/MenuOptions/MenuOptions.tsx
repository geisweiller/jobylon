import React from 'react';
import { IMenuOptions } from './interfaces';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './styles';

const MenuOptions: React.FC<IMenuOptions> = ({ options }) => {
  const navigate = useNavigate();
  const activeRoute = useLocation().pathname.split('/')[1];
  return (
    <S.OptionsContainer data-testid="options_container">
      <S.OptionsList>
        {options.map(({ id, label, icon, route }) => (
          <S.Option
            key={id}
            onClick={() => navigate(`${route}`)}
            selected={route === activeRoute}
            data-testid="option"
          >
            {!!icon && icon} {label}
          </S.Option>
        ))}
      </S.OptionsList>
    </S.OptionsContainer>
  );
};

export default MenuOptions;
