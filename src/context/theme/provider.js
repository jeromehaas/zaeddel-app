import { createContext, useReducer, useContext } from "react";

const Context = createContext();

const Provider = ({ reducer, initialState, children }) => (
	<Context.Provider value={ useReducer( reducer, initialState )}>
		{ children }
	</Context.Provider>
);

const useContextApi = () => useContext(Context);

export { Provider, useContextApi }

