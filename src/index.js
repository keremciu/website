import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index.js';
import gtagSetup from './utils/shitParties/gtag';
import { ThemeProvider } from './utils/ThemeContext';
import { createGlobalStyle } from 'styled-components'

const isDev = process.env.NODE_ENV === 'development';

if (!isDev) {
  gtagSetup({
    id: 'UA-10277838-2',
  });
}

const GlobalStyle = createGlobalStyle`
  a, a:focus, a:active {
    color: ${props => props.theme.link};
    transition: 0.6s color;
  }
`

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
