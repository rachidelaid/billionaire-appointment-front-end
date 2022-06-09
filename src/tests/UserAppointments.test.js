import {
  render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import UserAppointments from '../pages/UserAppointments';
import store from '../redux/store';

const Wrapper = () => (
  <Provider store={store}>
    <BrowserRouter>
      <UserAppointments />
    </BrowserRouter>
  </Provider>
);

describe('UserAppointments Component', () => {
  it('should render welcome text', () => {
    render(<Wrapper />);
    const welcomeText = screen.getByRole('heading', { name: /no appointments/i });

    expect(welcomeText).toMatchSnapshot();
  });

  it('should appear login message', () => {
    render(<Wrapper />);

    const loginMessage = screen.getByText(/You need to login in order to access this page\./i);

    expect(loginMessage).toMatchSnapshot();
  });
});
