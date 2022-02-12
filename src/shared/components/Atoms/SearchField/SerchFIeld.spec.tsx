import { fireEvent, render } from '@testing-library/react';
import { SearchField } from '..';

const handleSearch = jest.fn();
const onChange = jest.fn();

describe('SearchField Component', () => {
  it('should be able to render a Search Field', () => {
    const { getByTestId } = render(<SearchField handleSearch={handleSearch} />);

    const searchContainer = getByTestId('searchfield_container');
    const searchInput = getByTestId('searchfield_input');
    const searchButton = getByTestId('searchfield_button');

    expect(searchContainer).toBeTruthy();
    expect(searchInput).toBeTruthy();
    expect(searchButton).toBeTruthy();
  });

  it('should call onClick function', () => {
    const { getByTestId } = render(
      <SearchField handleSearch={handleSearch} value="2" onChange={onChange} />
    );

    const searchButton = getByTestId('searchfield_button') as HTMLButtonElement;

    fireEvent.click(searchButton);
    expect(handleSearch).toBeCalled();
  });

  it('should have button disabled', () => {
    const { getByTestId } = render(
      <SearchField handleSearch={handleSearch} value="2" onChange={onChange} />
    );

    const searchButton = getByTestId('searchfield_button') as HTMLButtonElement;

    fireEvent.click(searchButton);
    expect(handleSearch).toBeCalled();
  });
});
