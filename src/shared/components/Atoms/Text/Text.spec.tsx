import { render } from '@testing-library/react';
import { Text } from '..';

describe('Text Component', () => {
  it('should be able to render a large and bold Text', () => {
    const { getByTestId } = render(
      <Text size="large" weight="bold">
        Test text
      </Text>
    );

    const text = getByTestId('text');

    expect(text).toBeTruthy();
    expect(text).toHaveTextContent('Test text');
    expect(text).toHaveStyle('font-size: 18px; font-weight: 700;');
  });

  it('should be able to render a small and thin Text', () => {
    const { getByTestId } = render(
      <Text size="small" weight="light">
        Test text
      </Text>
    );

    const text = getByTestId('text');

    expect(text).toHaveTextContent('Test text');
    expect(text).toHaveStyle('font-size: 12px; font-weight: 300;');
  });

  it('should be able to render a medium and regular Text', () => {
    const { getByTestId } = render(
      <Text size="medium" weight="regular">
        Test text
      </Text>
    );

    const text = getByTestId('text');

    expect(text).toHaveTextContent('Test text');
    expect(text).toHaveStyle('font-size: 16px; font-weight: 400;');
  });
});
