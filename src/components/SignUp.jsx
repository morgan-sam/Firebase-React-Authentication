import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from 'config/firebase';

const SignUp = ({ history }) => {
	const handleSignUp = useCallback(
		async (e) => {
			e.preventDefault();
			const { email, password } = e.target.elements;
			try {
				await app.auth().createUserWithEmailAndPassword(email.value, password.value);
				history.push('/');
			} catch (error) {
				alert(error);
			}
		},
		[ history ]
	);

	return (
		<div className="accountInput">
			<h1 className="title">Sign Up</h1>
			<form className="form" onSubmit={handleSignUp}>
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
