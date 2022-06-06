import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wrapper from '../helpers/test_wrapper';
import BillionaireForm from '../../components/BillionaireForm';

describe('New Billionaire Page', () => {
  const user = {
    role: 'admin',
  };

  const page = <Wrapper><BillionaireForm user={user} /></Wrapper>;
  const rendered = render(page);

  it('should render the Add a New Billionaire page when user is admin', async () => {
    expect(rendered).toMatchSnapshot();
  });

  it('should display the form labels', async () => {
    render(page);
    expect(screen.queryByText(/Name:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Title:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Price:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Image URL:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Description:/i)).toBeInTheDocument();
  });
});
