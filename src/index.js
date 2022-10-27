import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'styles/main.scss';
import { EntriesProvider, entriesInitialState, entriesReducer } from 'context/entries/index';
import { ThemeProvider, themeInitialState, themeReducer } from 'context/theme/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<EntriesProvider initialState={ entriesInitialState } reducer={ entriesReducer }>
			<ThemeProvider initialState={ themeInitialState } reducer={ themeReducer }>
				<App />
			</ThemeProvider>
		</EntriesProvider>
  </React.StrictMode>
);

