export interface ISelect {
  options: ISelectOption[];
  onChange: (value: string) => void;
}

export interface ISelectOption {
  id: number;
  label: string;
  value: string;
}
