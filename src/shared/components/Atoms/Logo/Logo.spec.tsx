import { render } from '@testing-library/react';
import { Logo } from '..';

const src = 'https://developer.jobylon.com/images/Colour_wordmark_RGB.png';

describe('Logo Component', () => {
  it('should be able to render a Logo', () => {
    const { getByTestId } = render(<Logo src={src} />);

    const logo = getByTestId('logo');

    expect(logo).toBeTruthy();
    expect(logo).toHaveStyle('width: 60px; height: 60px;');
  });

  it('should be able to render a large Logo', () => {
    const { getByTestId } = render(<Logo size="large" src={src} />);

    const logo = getByTestId('logo');

    expect(logo).toBeTruthy();
    expect(logo).toHaveStyle('width: 80px; height: 80px;');
  });

  it('should not render', () => {
    const { container } = render(<Logo />);

    expect(container.childElementCount).toBe(0);
  });
});
