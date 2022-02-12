import { ICompany, ILocations } from '../../../interfaces/interfaces';

export interface ICard extends React.HTMLProps<HTMLButtonElement> {
  company: ICompany;
  locations: ILocations;
  employment_type: string;
  experience: string;
  title: string;
  selectedJobId: number;
}

export interface ICardStyles {
  selected: boolean;
}
