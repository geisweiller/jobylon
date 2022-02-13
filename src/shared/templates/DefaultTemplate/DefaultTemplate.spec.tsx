import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTemplate } from '..';

describe('Template', () => {
  it('should be able to render the template', () => {
    const { getByTestId } = render(
      <DefaultTemplate>
        <div data-testid="test_id" />
      </DefaultTemplate>,
      {
        wrapper: BrowserRouter,
      }
    );

    const template = getByTestId('template_container');
    const children = getByTestId('test_id');

    expect(template).toBeTruthy();
    expect(children).toBeTruthy();
  });
});
