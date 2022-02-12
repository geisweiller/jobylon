export interface ISearchField
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  handleSearch: (value: string) => void;
}
