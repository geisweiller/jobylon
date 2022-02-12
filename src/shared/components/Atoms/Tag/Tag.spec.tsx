import { render } from '@testing-library/react';
import { Tag } from '..';

describe('Tag Component', () => {
  it('should be able to render a Tag', () => {
    const { getByTestId } = render(<Tag>Test tag</Tag>);

    const tag = getByTestId('tag');

    expect(tag).toBeTruthy();
    expect(tag).toHaveTextContent('Test tag');
  });
});
