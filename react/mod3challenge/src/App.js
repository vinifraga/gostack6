import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './store';
import Routes from './routes';
import GlobalStyle from './global';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
    <ToastContainer />
  </Provider>
);

export default App;
