import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'components/Home';
import Login from 'components/LogIn';
import SignUp from 'components/SignUp';
import { AuthProvider } from 'config/auth';
import PrivateRoute from 'components/PrivateRoute';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<div className="App">
					<PrivateRoute exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
				</div>
			</Router>
		</AuthProvider>
	);
};

export default App;
