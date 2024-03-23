import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';

import items from './redux/itemsSlice';
import search from './redux/searchSlice';
import count from './redux/countSlice';
import phone from './redux/phoneSlice';
import paymethod from './redux/paymentSlice';
import delmethod from './redux/deliverySlice';
import comment from './redux/commentSlice';
import errors from './redux/errorsSlice';
import blur from './utils/blur';

const store = configureStore({
  reducer: {
    items,
    search,
    count,
    phone,
    paymethod,
    delmethod,
    comment,
    errors,
    blur,
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
