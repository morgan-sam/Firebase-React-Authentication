import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'components/Home';
import { AuthProvider } from 'config/auth';
import PrivateRoute from 'components/PrivateRoute';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<div className="App">
					<PrivateRoute exact path="/" component={Home} />
					<Route exact path="/" component={null} />
					<Route exact path="/" component={null} />
				</div>
			</Router>
		</AuthProvider>
	);
};

export default App;
