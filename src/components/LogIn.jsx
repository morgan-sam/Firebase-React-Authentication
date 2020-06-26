import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from 'config/firebase';
import { AuthContext, AuthProvider } from 'config/auth';

const SignUp = ({ history }) => {
	const handleLogin = useCallback(
		async (e) => {
			e.preventDefault();
			const { email, password } = e.target.elements;
			try {
				await app.auth().signInWithEmailAndPassword(email.value, password.value);
				history.push('/');
			} catch (error) {
				alert(error);
			}
		},
		[ history ]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) return <Redirect to="/" />;

	return (
		<div>
			<h1>Sign Up</h1>
			<form onSubmit={handleLogin}>
				<label>
					Email<input name="email" type="email" placeholder="Email" />
				</label>
				<label>
					Password<input name="password" type="password" placeholder="Password" />
				</label>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default withRouter(SignUp);
