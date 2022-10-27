const reducer = ( state, action ) => {
	switch(action.type) {
		case "UPDATE_ENTRIES": {
			return {
				...state, 
				entries: [ ...state.entries, ...action.payload]
			};
		}
		case "DELETE_ALL_ENTRIES": {
			return {
				...state, 
				entries: [ ]
			}
		}
		case "FETCH_ENTRIES": {
			return {
				...state, 
				entries: [ ...action.payload ],
			}
		}
		case "TOGGLE_ENTRIES_IS_DONE": {
			const entries = state.entries.map((entry) => {
				if (entry.id === action.payload[0].id) { return action.payload[0] }
				return entry
			})
			return {
				...state, 
				entries: [ ...entries ]
			}
		}
		default: {
			return state;
		}
	}
}

export default reducer;