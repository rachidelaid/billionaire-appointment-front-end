import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wrapper from '../helpers/test_wrapper';
import DeleteBillionaire from '../../pages/DeleteBillionaire';

describe('New Billionaire Page', () => {
  const page = <Wrapper><DeleteBillionaire /></Wrapper>;
  const rendered = render(page);

  it('should render the Add a New Billionaire page', async () => {
    expect(rendered).toMatchSnapshot();
  });

  it('should display the title', async () => {
    render(page);
    expect(screen.queryByText(/ADD A BILLIONAIRE/i)).toBeInTheDocument();
  });
});
