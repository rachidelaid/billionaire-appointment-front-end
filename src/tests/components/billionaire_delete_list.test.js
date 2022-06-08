import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wrapper from '../helpers/test_wrapper';
import BillionaireDeleteList from '../../components/BillionaireDeleteList';

describe('New Billionaire Page', () => {
  const user = {
    role: 'admin',
  };

  const billionaires = [{
    id: 1,
    name: 'Jeff',
    title: 'title',
    username: 'username',
    price: 949,
    image: 'url',
  }];

  const page = <Wrapper><BillionaireDeleteList user={user} billionaires={billionaires} /></Wrapper>;
  const rendered = render(page);

  it('should render the Delete Billionaires page', async () => {
    expect(rendered).toMatchSnapshot();
  });

  it('should display billionaire box', async () => {
    render(page);
    expect(screen.queryByText(/Jeff/i)).toBeInTheDocument();
    expect(screen.queryByText(/DELETE/i)).toBeInTheDocument();
  });
});
