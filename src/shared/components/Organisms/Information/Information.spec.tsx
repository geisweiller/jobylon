import { fireEvent, render } from '@testing-library/react';
import { Information } from '..';

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

window.open = jest.fn();

describe('Information Component', () => {
  it('should be able to render Information', () => {
    const { getByTestId, getAllByTestId } = render(<Information job={job} loading={false} />);

    const container = getByTestId('info_container');
    const header = getByTestId('info_header');
    const content = getByTestId('info_content');
    const footer = getByTestId('info_footer');
    const companyLogo = getByTestId('logo');
    const companyInfo = getAllByTestId('text');

    expect(container).toBeTruthy();
    expect(header).toBeTruthy();
    expect(content).toBeTruthy();
    expect(footer).toBeTruthy();
    expect(companyLogo).toBeTruthy();
    expect(companyInfo).toBeTruthy();
  });

  it('should be able to click button to go to ad', () => {
    const { getByTestId } = render(<Information job={job} loading={false} />);

    const button = getByTestId('button');

    expect(button).toBeTruthy();
    fireEvent.click(button);
  });

  it('should render skeletons instead job', () => {
    const { getAllByTestId } = render(<Information job={job} loading />);

    const skeleton = getAllByTestId('skeleton');

    expect(skeleton).toBeTruthy();
  });
});
