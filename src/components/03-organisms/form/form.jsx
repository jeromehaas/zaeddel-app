import { supabase } from 'utils/supabase-client';
import { useEntriesContext } from 'context/entries/index';
import { useState } from 'react';

const Form = () => {

	const [ data, dispatch ] = useEntriesContext();
	const [ input, setInput ] = useState('');

	const createEntry = async (event) => {
		event.preventDefault();
		const { data, error } = await supabase
			.from('entries')
			.insert([ { text: input.toLowerCase(), isDone: false } ])
			.select('*');
		dispatch({ type: 'UPDATE_ENTRIES', payload: data });
		setInput('');
	};

	return (
		<div className="form">
			<form className="form__form">
				<div className="form__wrapper">
					<input className="form__input" type="text" value={ input } onChange={ (event) => setInput(event.target.value) } />
					<button className="form__button icon icon--plus" type="submit" value=" " onClick={ (event) => createEntry(event)}></button>
				</div>
			</form>
		</div>
	)
};

export default Form;