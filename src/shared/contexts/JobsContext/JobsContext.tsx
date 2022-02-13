import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../../../services/api';
import { IApiResponse, IJob } from '../../interfaces/interfaces';
import { IJobsContext } from './interfaces';

export const JobsContext = createContext<IJobsContext>({} as IJobsContext);

export const JobsProvider: React.FC = ({ children }) => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [selectedJob, setSelectedJob] = useState<IJob>({} as IJob);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const { data }: { data: IApiResponse[] } = await api.get('');
      setJobs(data);
      setSelectedJob(data[0]);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        loading,
        selectedJob,
        error,
        setSelectedJob,
        getData,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};
