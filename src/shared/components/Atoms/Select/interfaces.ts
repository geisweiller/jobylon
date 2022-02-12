export interface ISelect {
  options: ISelectOption[];
  onChange: (value: string) => void;
}

export interface ISelectOption {
  id: string;
  label: string;
  value: string;
}
