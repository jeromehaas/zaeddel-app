const Text = ({ className, children }) => {

	return (
		<p className={` ${ className ? className : '' } text `}>{ children }</p>
	);

};

export default Text;