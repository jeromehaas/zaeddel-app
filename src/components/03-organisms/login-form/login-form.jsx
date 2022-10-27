import { supabase } from 'utils/supabase-client';
import { useState, useEffect } from 'react'
import cookie from 'react-cookies';
import { sha256 } from 'js-sha256';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

	const [ input, setInput ] = useState('');
	const navigate = useNavigate();
	const updateInput = (value) => setInput(input + value);;
	const resetInput = () => setInput('');

	const storeSessionCookie = () => {
			const token = sha256(input);
			cookie.save('session', token, { path: '/' });
	};

	const login = async () => {
		let { data, error } = await supabase.auth.signInWithPassword({
			email: process.env.REACT_APP_EMAIL,
			password: input
		});
		if (error) return resetInput();
		storeSessionCookie();
		navigate('/');
	}
	
	useEffect(() => {
		if (input.length !== 6) return;
		login();
	}, [input]);

	return (

		<div className="login-form__container">
	<h1 className="login-form__logo">zäddel</h1>
	<div className="login-form__dial-wrapper">
		<button className="login-form__dial-button" onClick={ () => updateInput(1) }>1</button>
		<button className="login-form__dial-button" onClick={ () => updateInput(2) }>2</button>
		<button className="login-form__dial-button" onClick={ () => updateInput(3) }>3</button>
		<button className="login-form__dial-button" onClick={ () => updateInput(4) }>4</button>
		<button className="login-form__dial-button" onClick={ () => updateInput(5) }>5</button>
		<button className="login-form__dial-button" onClick={ () => updateInput(6) }>6</button>
		<button className="login-form__dial-button" onClick={ () => updateInput(7) }>7</button>
		<button className="login-form__dial-button" onClick={ () => updateInput(8) }>8</button>
		<button className="login-form__dial-button" onClick={ () => updateInput(9) }>9</button>
		<button className="login-form__dial-button" onClick={ () => updateInput(0) }>0</button>
	</div>
	<div className="login-form__dots-wrapper">
		<div className={`login-form__dot ${ input.length >= 1 ? 'login__dot--active' : ''}`}></div>
		<div className={`login-form__dot ${ input.length >= 2 ? 'login__dot--active' : ''}`}></div>
		<div className={`login-form__dot ${ input.length >= 3 ? 'login__dot--active' : ''}`}></div>
		<div className={`login-form__dot ${ input.length >= 4 ? 'login__dot--active' : ''}`}></div>
		<div className={`login-form__dot ${ input.length >= 5 ? 'login__dot--active' : ''}`}></div>
		<div className={`login-form__dot ${ input.length >= 6 ? 'login__dot--active' : ''}`}></div>
	</div>
</div>
)

};

export default LoginForm;