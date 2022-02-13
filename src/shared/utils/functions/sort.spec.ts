import { sortByExperience } from './sort';

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

const job1 = {
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

const job2 = {
  id: 1,
  company,
  contact: contacts,
  descr: 'Job description',
  employment_type: 'Full time',
  experience: 'Entry level',
  from_date: '2020-01-01',
  function: 'Developer',
  language: 'English',
  title: 'Good job',
  urls,
  owner: onwer,
  skills: 'JavaScript, React, Redux',
  locations,
};

const jobs = [job1, job2];

describe('Sort by experience  ', () => {
  it('should sort by experience', () => {
    const sortedJobs = sortByExperience(jobs);

    expect(sortedJobs[0].experience).toBe('Entry level');
    expect(sortedJobs[1].experience).toBe('Experienced');
  });
});
