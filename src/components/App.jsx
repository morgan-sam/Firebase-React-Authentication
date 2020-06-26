import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={null} />
				<Route exact path="/" component={null} />
				<Route exact path="/" component={null} />
			</div>
		</Router>
	);
};

export default App;
