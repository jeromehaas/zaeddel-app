import { Outlet, Navigate } from 'react-router-dom';
import { supabase } from './supabase-client';
import { useState, useEffect } from 'react';

const PrivateRoute = () => {

	const [ isLoggedIn, setIsLoggedIn ] = useState('false');

	const checkSession = async () => {
		const { data: { session }} = await supabase.auth.getSession();
		session ? setIsLoggedIn(true) : setIsLoggedIn(false)
	};

	useEffect(() => {
		checkSession();
	});

	return (
		isLoggedIn ? <Outlet /> : <Navigate to="/login" />
	);

};

export default PrivateRoute;