import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MenuOptions } from '..';
import { Assets } from '../../../../assets';
import { EMenuOptions } from '../../../enums/menuOptions';
import { colors } from '../../../styles/theme';

const options = [
  {
    id: 1,
    label: EMenuOptions.Jobs,
    icon: <Assets.Search />,
    route: 'jobs',
  },
  {
    id: 2,
    label: EMenuOptions.MyJobs,
    icon: <Assets.List />,
    route: 'my-jobs',
  },
  {
    id: 3,
    label: EMenuOptions.Reports,
    icon: <Assets.Reports />,
    route: 'reports',
  },
  {
    id: 4,
    label: EMenuOptions.Messages,
    icon: <Assets.Chat />,
    route: 'chat',
  },
];

describe('MenuOptions Component', () => {
  it('should be able to render Menu options', () => {
    const { getByTestId, getAllByTestId } = render(<MenuOptions options={options} />, {
      wrapper: BrowserRouter,
    });

    const optionsContainer = getByTestId('options_container');
    const option = getAllByTestId('option');
    expect(optionsContainer).toBeTruthy();
    expect(option.length).toBe(4);
  });

  it('should be able to select an option', () => {
    const { getAllByTestId } = render(<MenuOptions options={options} />, {
      wrapper: BrowserRouter,
    });

    const option = getAllByTestId('option');
    fireEvent.click(option[1]);
    expect(option[1]).toHaveStyle(`color: ${colors.lightBlue}`);
  });
});
