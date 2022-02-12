export interface IMenuOptions {
  options: IOption[];
}

export interface IOption {
  id: number;
  label: string;
  icon?: JSX.Element;
  route: string;
}

export interface IOptionStyles
  extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  selected: boolean;
}
