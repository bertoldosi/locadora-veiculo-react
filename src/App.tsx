import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import GlobalStyle from './styles/global';

import { store, persisetdStore } from './store/store';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persisetdStore}>
        <ToastProvider>
          <Router>
            <Routes />
            <GlobalStyle />
          </Router>
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
