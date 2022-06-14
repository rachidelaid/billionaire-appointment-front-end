import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from '../../pages/Signup';
import Wrapper from '../helpers/test_wrapper';

describe('Signup Page Snapchat', () => {
  const page = render(<Wrapper><Signup /></Wrapper>);

  it('should render the signup page', () => {
    expect(page).toMatchSnapshot();
  });
});

describe('Signup Page Elements', () => {
  beforeEach(() => {
    render(<Wrapper><Signup /></Wrapper>);
  });

  it('should show the Name input', async () => {
    const nameInput = await screen.findByPlaceholderText('Name');
    expect(nameInput).toBeInTheDocument();
  });

  it('should show the Name input', async () => {
    const usernameInput = await screen.findByPlaceholderText('Name');
    expect(usernameInput).toBeInTheDocument();
  });

  it('should show the Email input', async () => {
    const emailInput = await screen.findByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
  });

  it('should show the Password input', async () => {
    const passwordInput = await screen.findByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('should show the Confirm Password input', async () => {
    const confirmPasswordInput = await screen.findByPlaceholderText('Confirm Password');
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  it('should show the sign-up button', async () => {
    const signupButton = await screen.findByText('Sign Up');
    expect(signupButton).toBeInTheDocument();
  });
});

describe('Signup Page Errors Handler', () => {
  it('should show the wrong email error', async () => {
    render(<Wrapper><Signup /></Wrapper>);

    const nameInput = await screen.findByPlaceholderText('Name');
    const usernameInput = await screen.findByPlaceholderText('Username');
    const emailInput = await screen.findByPlaceholderText('Email');
    const passwordInput = await screen.findByPlaceholderText('Password');
    const confirmPasswordInput = await screen.findByPlaceholderText('Confirm Password');

    fireEvent.change(nameInput, { target: { value: 'test' } });
    fireEvent.change(usernameInput, { target: { value: 'test' } });
    fireEvent.change(emailInput, { target: { value: 'test@mail.com' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: '123' } });
    const signupButton = await screen.findByText('Sign Up');
    fireEvent.click(signupButton);

    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Password is too short (minimum is 6 characters)');
  });
});
