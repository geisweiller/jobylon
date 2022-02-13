import { IJob } from '../../../../shared/interfaces/interfaces';

export interface IList extends IEmptyList {
  jobs: IJob[];
  setSelectedJob: (job: IJob) => void;
  loading: boolean;
}

export interface IEmptyList {
  error: boolean;
}
