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
		<div className="login">
			<h1 className="title">Log In</h1>
			<form className="form" onSubmit={handleLogin}>
				<label className="formInput">
					<span className="formLabel">Email</span>
					<input name="email" type="email" placeholder="Email" />
				</label>
				<label className="formInput">
					<span className="formLabel">Password</span>
					<input name="password" type="password" placeholder="Password" />
				</label>
				<button className="formBtn" type="submit">
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default withRouter(SignUp);
