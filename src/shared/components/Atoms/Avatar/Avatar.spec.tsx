import { render } from '@testing-library/react';
import { Avatar } from '..';

describe('Avatar Component', () => {
  it('should be able to render an Avatar', () => {
    const { getByTestId } = render(<Avatar />);

    const avatar = getByTestId('avatar');

    expect(avatar).toBeTruthy();
    expect(avatar).toHaveStyle('width: 50px; height: 50px;');
  });

  it('should be able to render an medium Avatar', () => {
    const { getByTestId } = render(<Avatar size="medium" />);

    const avatar = getByTestId('avatar');

    expect(avatar).toBeTruthy();
    expect(avatar).toHaveStyle('width: 40px; height: 40px;');
  });

  it('should be able to render an small Avatar', () => {
    const { getByTestId } = render(<Avatar size="small" />);

    const avatar = getByTestId('avatar');

    expect(avatar).toBeTruthy();
    expect(avatar).toHaveStyle('width: 30px; height: 30px;');
  });
});
