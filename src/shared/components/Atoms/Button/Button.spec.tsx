import { fireEvent, render } from '@testing-library/react';
import { Button } from '..';

const onClick = jest.fn();

describe('Button Component', () => {
  it('should be able to render a Button', () => {
    const { getByTestId } = render(<Button onClick={onClick} />);

    const button = getByTestId('button');

    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });

  it('should be disabled', () => {
    const { getByTestId } = render(<Button disabled onClick={onClick} />);

    const button = getByTestId('button');
    expect(button).toBeDisabled();
  });
});
