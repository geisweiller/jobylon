import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from '..';

describe('Information Component', () => {
  it('should be able to render Information', () => {
    const { getByTestId } = render(<Menu />, {
      wrapper: BrowserRouter,
    });

    const container = getByTestId('menu_container');
    const header = getByTestId('menu_header');
    const user = getByTestId('user_container');

    expect(container).toBeTruthy();
    expect(header).toBeTruthy();
    expect(user).toBeTruthy();
  });
});
