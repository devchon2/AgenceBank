import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

// Create a root for rendering
const root = createRoot(document.getElementById('root'));

// Render the main application
root.render(
  // Wrap the application with a Redux provider to provide the store
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
