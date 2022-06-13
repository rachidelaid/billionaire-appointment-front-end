import {
  fireEvent,
  render, screen, within,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../../components/Navbar';
import store from '../../redux/store';

const Wrapper = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  </Provider>
);

describe('Navbar Component', () => {
  it('should render logo image', () => {
    render(<Wrapper />);
    const logoImg = screen.getByRole('img', {
      name: /billionaires appointments logo/i,
    });

    expect(logoImg).toMatchSnapshot();
  });

  it('should render only billionaires link if user is not logged in', () => {
    render(<Wrapper />);

    const billionairesLink = screen.getByRole('link', {
      name: /billionaires/i,
    });

    const signinLink = screen.getByRole('link', {
      name: /sign in/i,
    });

    expect(billionairesLink).toMatchSnapshot();
    expect(signinLink).toMatchSnapshot();
  });

  it('should show nav', () => {
    render(<Wrapper />);

    const navigation = screen.getByRole('navigation');
    const hideNavBtn = within(navigation).getByRole('button');

    expect(hideNavBtn).toMatchSnapshot();

    fireEvent.click(hideNavBtn);

    expect(navigation.style.transform).toEqual('translateX(-100%)');
  });
});
