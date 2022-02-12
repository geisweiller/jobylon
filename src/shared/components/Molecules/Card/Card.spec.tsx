import { fireEvent, render } from '@testing-library/react';
import { Card } from '..';

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

const locations = {
  location: {
    text: 'São Paulo',
  },
};

describe('Card Component', () => {
  it('should be able to render a Card', () => {
    const { getByTestId } = render(
      <Card
        company={company}
        locations={locations}
        employment_type="Full time"
        experience="Experienced"
        title="Good job"
        selectedJobId={1}
        loading={false}
      />
    );

    const card = getByTestId('card_container');

    expect(card).toBeTruthy();
    fireEvent.click(card);
  });

  it('should render Skeleton instead Card', () => {
    const { getByTestId } = render(
      <Card
        company={company}
        locations={locations}
        employment_type="Full time"
        experience="Experienced"
        title="Good job"
        selectedJobId={1}
        loading
      />
    );

    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeTruthy();
  });
});
