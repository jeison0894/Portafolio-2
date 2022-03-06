import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css";
import App from './App'
import { LanguageProvider } from './context/LanguageContext';
import { DarkModeProvider } from './context/DarkModeContext';

ReactDOM.render(
  <DarkModeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </DarkModeProvider>,
  document.getElementById('root')
)
