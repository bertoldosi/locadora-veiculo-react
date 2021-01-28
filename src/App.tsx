import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import { store, persisetdStore } from './store/store';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persisetdStore}>
        <Router>
          <Routes />

          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
