import { useThemeContext } from "context/theme/index";

const Page = ({ className, children }) => {

	const [ themeData, themeDispatch ] = useThemeContext();

	return (
		<div className={` ${className ? className : '' } ${ themeData.theme.style === 'light' ? 'page--light' : 'page--dark' } page `}>
			{ children }
		</div>
	);

};

export default Page;