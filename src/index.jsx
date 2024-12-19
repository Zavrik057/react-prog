import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import '../src/CSS/index.css'
import reportWebVitals from './components/reportWebVitals.jsx';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(document.body);

// const defaultState = {
//       songs: [],
// }
// const reducer = (state = defaultState, action) => {
//       switch (action.type) {
//             case 'addSong':
//                   return { ...state, songs: [...state.songs, action.payload] }
//             case 'removeSong':
//                   return {};
//             default:
//                   return state;
//       }
// }
// const store = configureStore(reducer);

root.render(
      <React.StrictMode>
            <App></App>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
