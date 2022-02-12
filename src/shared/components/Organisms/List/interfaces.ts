import { IJob } from '../../../../shared/interfaces/interfaces';

export interface IList {
  jobs: IJob[];
  setSelectedJob: (job: IJob) => void;
  loading: boolean;
}
