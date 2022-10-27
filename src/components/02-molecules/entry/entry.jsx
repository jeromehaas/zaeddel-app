import Text from 'components/01-atoms/text/text';
import { useThemeContext } from "context/theme/index";

const Entry = ({ className, children, isDone, onClick }) => {

	const [ themeData ] = useThemeContext();

	return (
		<div className={` ${ className ? className : '' } ${ (isDone && themeData.theme.showIsDone === false) && 'entry--hidden' } entry `} onClick={ onClick }>
			<input className={ `${ className ? className : '' } entry__checkmark` } type="checkbox" checked={ isDone } readOnly />
			<Text className={ `entry__text ${ isDone ? 'entry__text--checked' : '' }` } >{ children }</Text>
		</div>
	);

};

export default Entry;