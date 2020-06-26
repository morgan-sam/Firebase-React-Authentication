import React, { useState, useEffect } from 'react';
import app from 'config/firebase';

const Home = () => {
	const newImage = async () => {
		try {
			const raw = await fetch(`https://picsum.photos/300/300`);
			setImg(raw.url);
		} catch (error) {
			alert(error);
		}
	};
	const [ img, setImg ] = useState(null);

	useEffect(() => {
		if (img === null) newImage();
	}, []);

	return (
		<div className="home">
			<h1 className="title">Home</h1>
			<img className="homeImage" src={img} />
			<div className="btnContainer">
				<button className="formBtn" onClick={() => newImage()}>
					New Image
				</button>
				<button className="formBtn" onClick={() => app.auth().signOut()}>
					Sign Out
				</button>
			</div>
		</div>
	);
};

export default Home;
