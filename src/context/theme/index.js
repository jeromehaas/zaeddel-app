import themeInitialState from 'context/theme/initial-state';
import { Provider as ThemeProvider, useContextApi as useThemeContext } from 'context/theme/provider';
import themeReducer from 'context/theme/reducer';

export {
	themeInitialState,
	ThemeProvider,
	useThemeContext,
	themeReducer
};