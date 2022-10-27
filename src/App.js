import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import PrivateRoute from 'utils/private-route';
import Login from 'components/05-pages/login/login';
import Dashboard from 'components/05-pages/dashboard/dashboard';

const App = () => {

  return (
		<BrowserRouter>
			<Routes>
				<Route element={ <PrivateRoute /> }>
					<Route path="/" exact element={ <Dashboard /> } />
				</Route>
				<Route path="/login" exact element={ <Login />}  />
			</Routes>	
		</BrowserRouter>
  );

};

export default App;
