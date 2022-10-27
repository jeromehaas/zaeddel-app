import Entry from "components/02-molecules/entry/entry";
import NoEntries from "components/02-molecules/no-entries/no-entries";
import { useEntriesContext } from "context/entries/index";
import { useThemeContext } from "context/theme/index";
import { useEffect } from 'react';
import { supabase } from 'utils/supabase-client';

const List = () => {

	const [ entriesData, entriesDispatch ] = useEntriesContext();
	const [ themeData, themeDispatch ] = useThemeContext();

	const doneEntries = entriesData?.entries?.filter((entry) => {
		return entry.isDone
	});

	const allEntries = entriesData.entries;

	const fetchEntries = async () => {
		const { data, error } = await supabase
			.from('entries') 
			.select('*');
		entriesDispatch({ type: 'FETCH_ENTRIES', payload: data })
	};

	const toggleEntriesIsDone = async (id, isDone) => {
		const { data, error } = await supabase
			.from('entries')
			.update({ isDone: !isDone })
			.eq('id', id )
			.select('*');
		entriesDispatch({ type: 'TOGGLE_ENTRIES_IS_DONE', payload: data })
	};

	useEffect(() => {
		fetchEntries();
	}, []);

	return (
		<div className="list">
			{ (allEntries.length === doneEntries.length && themeData.theme.showIsDone === false)
			? <NoEntries />
			: entriesData.entries.map((entry, index) => (
					<Entry className="list__item" isDone={ entry.isDone } key={ index } onClick={ () => toggleEntriesIsDone(entry.id, entry.isDone) }>
						{ entry.text }
					</Entry>
			))}
		</div>
	);

};

export default List;