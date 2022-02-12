import React from 'react';
import { Organisms } from '../../shared/components';
import { useJobs } from '../../shared/hooks';

import * as S from './styles';

const Jobs: React.FC = () => {
  const { jobs, selectedJob, loading, setSelectedJob } = useJobs();

  return (
    <S.Wrapper>
      <Organisms.List jobs={jobs} setSelectedJob={setSelectedJob} loading={loading} />
      <Organisms.Information job={selectedJob} loading={loading} />
    </S.Wrapper>
  );
};

export default Jobs;
