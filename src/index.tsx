import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FiltersProvider } from './hooks/filtersContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>
);

