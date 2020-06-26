import React from 'react';
import app from 'config/firebase';

const Home = () => {
	return (
		<div className="home">
			<h1 className="title">Home</h1>
			<button onClick={() => app.auth().signOut()}>Sign Out</button>
		</div>
	);
};

export default Home;
