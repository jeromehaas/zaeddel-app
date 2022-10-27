import entriesInitialState from 'context/entries/initial-state';
import { Provider as EntriesProvider, useContextApi as useEntriesContext } from 'context/entries/provider';
import entriesReducer from 'context/entries/reducer';

export {
	entriesInitialState,
	EntriesProvider,
	useEntriesContext,
	entriesReducer
};