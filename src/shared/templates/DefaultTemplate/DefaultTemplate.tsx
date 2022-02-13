import React from 'react';
import { Organisms } from '../../components';

import * as S from './styles';

const DefaultTemplate: React.FC = ({ children }) => {
  return (
    <S.TemplateContainer data-testid="template_container">
      <Organisms.Menu />
      {children}
    </S.TemplateContainer>
  );
};

export default DefaultTemplate;
