import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from '../pages/Signup';
import Wrapper from './helpers/test_wrapper';

describe('Signup Page', () => {
  const page = render(<Wrapper><Signup /></Wrapper>);

  it('should render the signup page', async () => {
    expect(page).toMatchSnapshot();
  });
});
