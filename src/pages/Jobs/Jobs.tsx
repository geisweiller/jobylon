import React from 'react';
import { Organisms } from '../../shared/components';
import { useJobs } from '../../shared/hooks';

import * as S from './styles';

const Jobs: React.FC = () => {
  const { jobs, selectedJob, loading, error, setSelectedJob } = useJobs();

  return (
    <S.Wrapper data-testid="jobs_page_container">
      <Organisms.List jobs={jobs} setSelectedJob={setSelectedJob} loading={loading} error={error} />
      <Organisms.Information job={selectedJob} loading={loading} error={error} />
    </S.Wrapper>
  );
};

export default Jobs;
