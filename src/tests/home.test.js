import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/Home';
import Wrapper from './helpers/test_wrapper';

describe('homepage', () => {
  const home = <Wrapper><Home /></Wrapper>;

  it('should display top speakers', async () => {
    render(home);
    expect(screen.queryByText(/Top speakers/i)).toBeInTheDocument();
  });
});
