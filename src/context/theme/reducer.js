const reducer = ( state, action ) => {
	switch(action.type) {
		case "TOGGLE_THEME_STYLE": {
			return {
				...state, 
				theme: {
					...state.theme,
					style: state.theme.style === 'dark' ? 'light' : 'dark'
				}
			}
		}
		case "TOGGLE_THEME_IS_DONE": {
			return {
				...state, 
				theme: {
					...state.theme,
					showIsDone: state.theme.showIsDone === true ? false : true
				}
			}
		}
		default: {
			return state;
		}
	}
}

export default reducer;