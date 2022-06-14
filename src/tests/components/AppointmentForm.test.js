import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppointmentForm from '../../components/AppointmentForm';
import store from '../../redux/store';

const props = {
  billionaires: [{
    id: 3,
    name: 'Ariel Camus',
  }],
  currentBillionaireId: 3,
  currentUser: {
    id: 1,
    access_token: 'x29mjjSGEQ88PsDCsUwKOGvB3XVsgQ8CYMe4vQA6rjs',
  },
};

const Wrapper = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppointmentForm props={props} />
    </BrowserRouter>
  </Provider>
);

describe('Appointments Component', () => {
  it('should render select tag', () => {
    render(<Wrapper />);
    const billionaireSelect = screen.getByRole('presentation');

    expect(billionaireSelect).toMatchSnapshot();
  });

  it('should render input date', () => {
    render(<Wrapper />);
    const dateInput = screen.getByPlaceholderText(/select date/i);

    expect(dateInput).toMatchSnapshot();
    fireEvent.change(dateInput, { target: { value: '2022-05-05' } });

    expect(dateInput.value).toBe('2022-05-05');
  });

  it('should render submit button', () => {
    render(<Wrapper />);
    const submitButton = screen.getByRole('button', { name: /book now/i });

    expect(submitButton).toMatchSnapshot();
  });

  it('should not create an appointment', () => {
    render(<Wrapper />);
    const submitButton = screen.getByRole('button', { name: /book now/i });

    fireEvent.click(submitButton);

    expect(submitButton).toMatchSnapshot();
  });

  it('should create an appointment', async () => {
    render(<Wrapper />);

    const submitButton = screen.getByRole('button', { name: /book now/i });

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'London' },
    });

    fireEvent.click(screen.getByRole('presentation'));
    const options = await screen.findAllByText('Ariel Camus');
    fireEvent.click(options[0]);

    fireEvent.change(screen.getByPlaceholderText(/select date/i), { target: { value: '2022-05-05' } });

    fireEvent.submit(submitButton);

    expect(screen.findByRole('heading', { name: /navbar/i })).toMatchSnapshot(); // redirects to home page
  });
});
