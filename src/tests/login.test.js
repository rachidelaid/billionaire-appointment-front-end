import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../pages/Login';
import Wrapper from './helpers/test_wrapper';

describe('Login Page Snapshot', () => {
  const page = render(<Wrapper><Login /></Wrapper>);

  it('should render the signup page', async () => {
    expect(page).toMatchSnapshot();
  });
});

describe('Login Page Elements', () => {
  beforeEach(() => {
    render(<Wrapper><Login /></Wrapper>);
  });

  it('should show the email input', async () => {
    const usernameInput = await screen.findByPlaceholderText('Username');
    expect(usernameInput).toBeInTheDocument();
  });

  it('should show the password input', async () => {
    const passwordInput = await screen.findByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('should show the sign-in button', async () => {
    const signinButton = await screen.findByText('Sign In');
    expect(signinButton).toBeInTheDocument();
  });
});

describe('Login Page Errors Handler', () => {
  it('should show the wrong email error', async () => {
    render(<Wrapper><Login /></Wrapper>);

    const usernameInput = await screen.findByPlaceholderText('Email');
    const passwordInput = await screen.findByPlaceholderText('Password');
    fireEvent.change(usernameInput, { target: { value: 'randomUsername' } });
    fireEvent.change(passwordInput, { target: { value: '123456789' } });
    const signinButton = await screen.findByText('Sign In');
    fireEvent.click(signinButton);

    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('wrong username or password');
  });
});
