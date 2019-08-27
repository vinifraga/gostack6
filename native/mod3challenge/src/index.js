import '~/config/ReactDevToolsConfig';
import '~/config/ReactotronConfig';
import React from 'react';
import store from '~/store';
import { Provider } from 'react-redux';

import Main from '~/pages/Main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
