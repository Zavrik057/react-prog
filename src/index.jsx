import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import '../src/CSS/index.css'
import reportWebVitals from './components/reportWebVitals.jsx';
import { findAllByAltText } from '@testing-library/react';
import App from './components/App.jsx';

const root = ReactDOM.createRoot(document.body);

root.render(
   <React.StrictMode>
      <App></App>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
