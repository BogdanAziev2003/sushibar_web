import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';

import items from './redux/itemsSlice';
import search from './redux/searchSlice';
import phone from './redux/phoneSlice';
import errors from './redux/errorsSlice';

const store = configureStore({
  reducer: {
    items,
    search,
    phone,
    errors,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
