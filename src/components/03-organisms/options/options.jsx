import { useEntriesContext } from 'context/entries/index';
import { useThemeContext } from 'context/theme/index';
import { supabase } from 'utils/supabase-client';

const Options = () => {

	const [ entriesData, entriesDispatch ] = useEntriesContext();
	const [ themeData, themeDispatch ] = useThemeContext();

	const toggleThemeStyle = () => {
		themeDispatch({ type: "TOGGLE_THEME_STYLE" })
	};

	const toggleThemeIsDone = () => {
		themeDispatch({ type: "TOGGLE_THEME_IS_DONE"})
	}

	const deleteAllEntries = async () => {
		const { data, error } = await supabase
			.from('entries')
			.delete()
			.neq('id', 0)
		entriesDispatch({ type: "DELETE_ALL_ENTRIES" });
	};
	
	return (
		<div className="options">
			<div className="options__wrapper">
				{ themeData.theme.style === 'dark' 
					? <i className="options__item icon icon--sun" onClick={ () => toggleThemeStyle() } />
					: <i className="options__item icon icon--moon" onClick={ () => toggleThemeStyle() } />
				}
				{ themeData.theme.showIsDone 
				? <i className="options__item icon icon--closed-eye" onClick={ () => toggleThemeIsDone() } />
				: <i className="options__item icon icon--open-eye" onClick={ () => toggleThemeIsDone() } />
			}
				<i className="options__item icon icon--trash" onClick={ () => deleteAllEntries() } />
			</div>
		</div>
	);

};

export default Options;