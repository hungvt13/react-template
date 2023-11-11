import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import './index.css';

import store from './state/store';
import routes from './service/routes/routes';
import theme from './service/theme/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
