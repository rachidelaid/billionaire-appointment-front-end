import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from '../../redux/store';

const Wrapper = ({ children }) => (

  <Provider store={store}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Provider>
);
Wrapper.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Wrapper;
