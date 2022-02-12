import { render } from '@testing-library/react';
import { Skeleton } from '..';

describe('Skeleton Component', () => {
  it('should be able to render a Skeleton', () => {
    const { getByTestId } = render(<Skeleton width={200} height={100} />);

    const skeleton = getByTestId('skeleton');

    expect(skeleton).toBeTruthy();
  });

  it('should be able to render a Skeleton with 4 text lines', () => {
    const { getAllByTestId } = render(<Skeleton numberOfLines={4} type="text" lineHeight={20} />);

    const skeletonlines = getAllByTestId('skeleton_line');

    expect(skeletonlines.length).toBe(4);
  });
});
