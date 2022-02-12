import React from 'react';

import * as S from './styles';

const Button: React.FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, ...props }) => {
  const { disabled, onClick } = props;
  return (
    <S.CustomButton disabled={disabled} onClick={onClick}>
      {children}
    </S.CustomButton>
  );
};

export default Button;
