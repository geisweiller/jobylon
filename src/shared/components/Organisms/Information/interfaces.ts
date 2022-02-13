import { IJob } from '../../../interfaces/interfaces';

export interface IInformation {
  job: IJob;
  loading: boolean;
  error: boolean;
}

export interface IInformationStyles {
  hide: boolean;
}
