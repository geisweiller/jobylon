import React from 'react';
import { Organisms } from '../../components';

import * as S from './styles';

const DefaultTemplate: React.FC = ({ children }) => {
  return (
    <S.TemplateContainer>
      <Organisms.Menu />
      {children}
    </S.TemplateContainer>
  );
};

export default DefaultTemplate;
