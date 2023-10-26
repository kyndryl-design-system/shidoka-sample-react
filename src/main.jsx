import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import '@kyndryl-design-system/shidoka-foundation/scss/root.scss';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/typography.scss';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/grid.scss';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
