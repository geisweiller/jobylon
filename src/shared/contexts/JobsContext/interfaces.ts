import { IJob } from '../../interfaces/interfaces';

export interface IJobsContext {
  jobs: IJob[];
  loading: boolean;
  selectedJob: IJob;
  setSelectedJob: (job: IJob) => void;
}
