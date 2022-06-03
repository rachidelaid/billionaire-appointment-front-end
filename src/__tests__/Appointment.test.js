import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Appointment from '../pages/Appointment';

const RouterProvider = () => (
  <BrowserRouter>
    <Appointment />
  </BrowserRouter>
);

describe('Appointments Component', () => {
  it('renders', () => {
    render(<RouterProvider />);
    const welcomeText = screen.getByText('BOOK A BILLIONAIRE');
    const cityInput = screen.getByPlaceholderText('City');
    const billionaireSelect = screen.getByTestId('select-tag');
    const dateInput = screen.getByTestId('date-input');
    const submitButton = screen.getByText('Book Now');

    expect(welcomeText).toMatchSnapshot();
    expect(cityInput).toMatchSnapshot();
    expect(billionaireSelect).toMatchSnapshot();
    expect(dateInput).toMatchSnapshot();
    expect(submitButton).toMatchSnapshot();
  });
});
