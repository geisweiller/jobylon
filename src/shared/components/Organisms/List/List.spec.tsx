import { fireEvent, render } from '@testing-library/react';
import { List } from '..';

const company = {
  id: 1,
  name: 'Company',
  logo: 'https://via.placeholder.com/150',
  industry: 'Technology',
  slug: 'company',
  name_internal: 'company',
  website: 'https://company.com',
  descr: 'Company description',
  cover: 'https://via.placeholder.com/150',
};

const contacts = {
  name: 'John Doe',
  email: 'johndoe@nobody.com',
  phone: '+55 11 99999-9999',
  photo: 'https://via.placeholder.com/150',
};

const urls = {
  ad: 'https://via.placeholder.com/150',
  apply: 'https://via.placeholder.com/150',
};

const onwer = {
  id: 1,
  name: 'John Doe',
  email: 'johndoe@nobody.com',
};

const locations = [
  {
    location: {
      text: 'São Paulo',
    },
  },
];

const job = {
  id: 1,
  company,
  contact: contacts,
  descr: 'Job description',
  employment_type: 'Full time',
  experience: 'Experienced',
  from_date: '2020-01-01',
  function: 'Developer',
  language: 'English',
  title: 'Good job',
  urls,
  owner: onwer,
  skills: 'JavaScript, React, Redux',
  locations,
};

const jobs = [job];

window.open = jest.fn();

const setSelected = jest.fn();
describe('List Component', () => {
  it('should be able to render List and select a job', () => {
    const { getByTestId } = render(
      <List jobs={jobs} setSelectedJob={setSelected} loading={false} error={false} />
    );

    const container = getByTestId('list_container');
    const header = getByTestId('list_header');

    const footer = getByTestId('list_sort_by_container');
    const jobCard = getByTestId('card_container');

    expect(container).toBeTruthy();
    expect(header).toBeTruthy();
    expect(footer).toBeTruthy();
    expect(jobCard).toBeTruthy();

    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 480 });

    fireEvent.click(jobCard);
  });

  it('should be able to search for jobs', () => {
    const { getByTestId, getByText } = render(
      <List jobs={jobs} setSelectedJob={setSelected} loading={false} error={false} />
    );

    const search = getByTestId('searchfield_input') as HTMLInputElement;
    const button = getByTestId('searchfield_button');

    fireEvent.change(search, { target: { value: 'Job' } });
    fireEvent.click(button);

    const searchResults = getByTestId('list_search_results');
    const clearButton = getByText('Clear filters');
    expect(searchResults).toBeTruthy();

    fireEvent.change(search, { target: { value: 'São Paulo' } });
    fireEvent.click(button);

    fireEvent.click(clearButton);
  });

  it('should be empty', () => {
    const { getByTestId, getByText } = render(
      <List jobs={[]} setSelectedJob={setSelected} loading={false} error />
    );

    const empty = getByTestId('empty_list');
    const error = getByText('Sorry, something went wrong. Please try again later.');

    expect(empty).toBeTruthy();
    expect(error).toBeTruthy();
  });
});
