import React, { useEffect, useState } from 'react';
import Loading from 'components/Loading';
import app from 'config/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	useEffect(
		() =>
			app.auth().onAuthStateChanged((user) => {
				setCurrentUser(user);
				setLoading(false);
			}),
		[]
	);
	if (loading) return <Loading />;
	else return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
