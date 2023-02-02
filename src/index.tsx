import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts from './components/Posts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Posts />
  </React.StrictMode>
);