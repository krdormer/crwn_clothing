import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
// Persistence 
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';



ReactDOM.render(
  // Redux
  <Provider store={store} >
    {/* Router */}
    <BrowserRouter>
      {/* Persistence */}
      <PersistGate persistor={persistor}>
        {/* Application */}
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
