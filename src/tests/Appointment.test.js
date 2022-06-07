import {
  render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Appointment from '../pages/Appointment';
import store from '../redux/store';

const Wrapper = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Appointment />
    </BrowserRouter>
  </Provider>
);

describe('Appointments Component', () => {
  it('should render welcome text', () => {
    render(<Wrapper />);
    const welcomeText = screen.getByRole('heading', { name: /book a billionaire/i });

    expect(welcomeText).toMatchSnapshot();
  });

  it('should appear login message if user is not logged in', () => {
    render(<Wrapper />);

    const loginMessage = screen.getByText(/you need to login in order to make an appointment\./i);

    expect(loginMessage).toMatchSnapshot();
  });
});
