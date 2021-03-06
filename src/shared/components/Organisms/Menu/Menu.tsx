import React from 'react';
import { Atoms, Molecules } from '../..';
import { Assets } from '../../../../assets';
import { EMenuOptions } from '../../../enums/menuOptions';

import * as S from './styles';

const Menu: React.FC = () => {
  const options = [
    {
      id: 1,
      label: EMenuOptions.Jobs,
      icon: <Assets.Search />,
      route: 'jobylon/jobs',
    },
    {
      id: 2,
      label: EMenuOptions.MyJobs,
      icon: <Assets.List />,
      route: 'jobylon/my-jobs',
    },
    {
      id: 3,
      label: EMenuOptions.Reports,
      icon: <Assets.Reports />,
      route: 'jobylon/reports',
    },
    {
      id: 4,
      label: EMenuOptions.Messages,
      icon: <Assets.Chat />,
      route: 'jobylon/chat',
    },
  ];

  return (
    <S.MenuContainer data-testid="menu_container">
      <S.MenuHeader data-testid="menu_header">
        <Assets.JobylonLogoFull />

        <S.UserInformationContainer data-testid="user_container">
          <Atoms.Avatar />

          <div>
            <Atoms.Text weight="bold">Arthur Geisweiller</Atoms.Text>
            <Atoms.Text size="small">Frontend engineer</Atoms.Text>
          </div>
        </S.UserInformationContainer>
      </S.MenuHeader>

      <Molecules.MenuOptions options={options} />
    </S.MenuContainer>
  );
};

export default Menu;
