import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	body {
		font-family: Arial, Helvetica, sans-serif;
	}
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
