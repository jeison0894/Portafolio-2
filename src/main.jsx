import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css";
import App from './App'
import { LanguageProvider } from './context/LanguageContext';

ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById('root')
)


/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
 */
