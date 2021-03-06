import { fireEvent, render } from '@testing-library/react';
import Select from './Select';

const onChange = jest.fn();

const options = [
  {
    id: 1,
    label: 'label',
    value: 'value',
  },
  {
    id: 2,
    label: 'label2',
    value: 'value2',
  },
  {
    id: 3,
    label: 'label3',
    value: 'value3',
  },
];

describe('Select Component', () => {
  it('should be able to render a Select', () => {
    const { getByTestId } = render(<Select options={[]} onChange={onChange} />);

    const selectContainer = getByTestId('select_container');
    const select = getByTestId('select');
    const defaultOption = getByTestId('default_option');

    expect(selectContainer).toBeTruthy();
    expect(select).toBeTruthy();
    expect(defaultOption).toBeTruthy();
  });

  it('check if select value default option is correct', () => {
    const { getByTestId } = render(<Select options={[]} onChange={onChange} />);
    const defaultOption = getByTestId('default_option');

    expect(defaultOption.innerHTML).toBe('Sort by...');
  });

  it('should be able to render options', () => {
    const { getAllByTestId } = render(<Select options={options} onChange={onChange} />);

    const option = getAllByTestId('select_option');

    expect(option.length).toBe(3);
  });

  it('check if onChange works', () => {
    const { getByTestId } = render(<Select options={options} onChange={onChange} />);

    const select = getByTestId('select');
    fireEvent.change(select, {
      target: { value: 'value2' },
    });
    expect(onChange).toHaveBeenCalledWith('value2');
  });
});
