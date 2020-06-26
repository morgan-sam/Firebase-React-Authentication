import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from 'config/firebase';
import Form from 'components/Form';

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
		<div className="accountInput signUp">
			<h1 className="title">Sign Up</h1>
			<Form onSubmit={handleSignUp} inputs={[ 'email', 'password' ]} submitText={'Sign Up'} />
			<div className="accountInputLabel">
				Regular here? <a href="/login">Log In</a>
			</div>
		</div>
	);
};

export default withRouter(SignUp);
