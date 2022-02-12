import React from 'react';
import ContentLoader from 'react-content-loader';
import { colors } from '../../../styles/theme';
import { ISkeleton } from './interfaces';

const Skeleton: React.FC<ISkeleton> = ({
  width = '100%',
  height = 100,
  type = 'box',
  numberOfLines = 10,
  lineHeight = 15,
}) => {
  if (type === 'text') {
    const lines = Array.from({ length: numberOfLines }, (v, line) => line);

    const defaultSpacing = {
      y: 15,
      sum: 30,
    };

    return (
      <ContentLoader
        height={height}
        width={width}
        backgroundColor={colors.loading}
        foregroundColor={colors.loadingForeground}
        data-testid="skeleton"
      >
        {lines.map((line) => (
          <rect
            key={line}
            x="5"
            y={defaultSpacing.y + defaultSpacing.sum * line}
            rx="5"
            ry="5"
            width="100%"
            height={lineHeight}
          />
        ))}
      </ContentLoader>
    );
  }
  return (
    <ContentLoader
      height={height}
      width={width}
      backgroundColor={colors.loading}
      foregroundColor={colors.loadingForeground}
      data-testid="skeleton"
    >
      <rect x="0" y="0" rx="20" ry="20" width={width} height={height} />
    </ContentLoader>
  );
};

export default Skeleton;
