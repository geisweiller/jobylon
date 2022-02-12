import React from 'react';

import { JobsProvider } from './shared/contexts';
import AppRoutes from './shared/routes/routes';
import GlobalStyles from './shared/styles/GlobalStyles';

const Bootstrap: React.FC = () => {
  return (
    <JobsProvider>
      <GlobalStyles />
      <AppRoutes />
    </JobsProvider>
  );
};

export default Bootstrap;
