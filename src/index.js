import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { InfoProvider } from './containers/hooks/useInfo';
import { TimeProvider } from './containers/hooks/useTime';
import { BookProvider } from './containers/hooks/useBook';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <InfoProvider>
        <TimeProvider>
          <BookProvider>
            <App />
          </BookProvider>
        </TimeProvider>
      </InfoProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
