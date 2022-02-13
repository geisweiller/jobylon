import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { JobsPage } from '..';

describe('Jobs page', () => {
  it('should be able to render page', () => {
    const { getByTestId } = render(<JobsPage />, {
      wrapper: BrowserRouter,
    });

    const container = getByTestId('jobs_page_container');
    const list = getByTestId('list_container');
    const information = getByTestId('info_container');

    expect(container).toBeTruthy();
    expect(list).toBeTruthy();
    expect(information).toBeTruthy();
  });
});
