import React, { useState, useEffect } from 'react';
import app from 'config/firebase';

const Home = () => {
	const newImage = async () => {
		try {
			const raw = await fetch(`https://picsum.photos/200/300`);
			setImg(raw.url);
		} catch (error) {
			alert(error);
		}
	};
	const [ img, setImg ] = useState();
	useEffect(() => newImage(), []);
	return (
		<div className="home">
			<h1 className="title">Home</h1>
			<img style={{ height: '300px', width: '200px', margin: '1rem' }} src={img} />
			<button onClick={() => newImage()}>New Image</button>
			<button onClick={() => app.auth().signOut()}>Sign Out</button>
		</div>
	);
};

export default Home;
