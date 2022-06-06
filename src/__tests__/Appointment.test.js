import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Appointment from '../pages/Appointment';

const RouterProvider = () => (
  <BrowserRouter>
    <Appointment />
  </BrowserRouter>
);

describe('Appointments Component', () => {
  it('should render welcome text', () => {
    render(<RouterProvider />);
    const welcomeText = screen.getByRole('heading', { name: /book a billionaire/i });

    expect(welcomeText).toMatchSnapshot();
  });

  it('should render input text', () => {
    render(<RouterProvider />);
    const cityInput = screen.getByRole('textbox');

    expect(cityInput).toMatchSnapshot();
    fireEvent.change(cityInput, { target: { value: 'London' } });

    expect(cityInput.value).toBe('London');
  });

  it('should render select tag', () => {
    render(<RouterProvider />);
    const billionaireSelect = screen.getByRole('combobox');

    expect(billionaireSelect).toMatchSnapshot();
    fireEvent.change(billionaireSelect, { target: { value: 5 } });

    expect(billionaireSelect.value).toBe('5');
  });

  it('should render input date', () => {
    render(<RouterProvider />);
    const dateInput = screen.getByPlaceholderText(/select date/i);

    expect(dateInput).toMatchSnapshot();
    fireEvent.change(dateInput, { target: { value: '2022-05-05' } });

    expect(dateInput.value).toBe('2022-05-05');
  });

  it('should render submit button', () => {
    render(<RouterProvider />);
    const submitButton = screen.getByRole('button', { name: /book now/i });

    expect(submitButton).toMatchSnapshot();
  });

  it('should not create an appointment', () => {
    render(<RouterProvider />);
    const submitButton = screen.getByRole('button', { name: /book now/i });

    fireEvent.click(submitButton);

    expect(submitButton).toMatchSnapshot();
  });

  it('should create an appointment', async () => {
    render(<RouterProvider />);

    const submitButton = screen.getByRole('button', { name: /book now/i });

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'London' },
    });

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 2 } });

    fireEvent.change(screen.getByPlaceholderText(/select date/i), { target: { value: '2022-05-05' } });

    fireEvent.submit(submitButton);

    expect(screen.findByRole('heading', { name: /navbar/i })).toMatchSnapshot(); // redirects to home page
  });
});
