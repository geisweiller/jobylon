import { IJob } from '../../interfaces/interfaces';

export interface IJobsContext {
  jobs: IJob[];
  loading: boolean;
  selectedJob: IJob;
  error: boolean;
  setSelectedJob: (job: IJob) => void;
  getData: () => void;
}
