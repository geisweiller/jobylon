import { render } from '@testing-library/react';
import { PageNotFound } from '..';

describe('Not Found Page', () => {
  it('should be able to render page', () => {
    const { getByTestId } = render(<PageNotFound />);

    const container = getByTestId('not_found_container');
    const message = getByTestId('text');

    expect(container).toBeTruthy();
    expect(message).toBeTruthy();
    expect(message).toHaveTextContent('Sorry, the page you are looking for does not exist.');
  });
});
