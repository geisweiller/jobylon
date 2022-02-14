export interface ISelect {
  options: ISelectOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

export interface ISelectOption {
  id: number;
  label: string;
  value: string;
}
