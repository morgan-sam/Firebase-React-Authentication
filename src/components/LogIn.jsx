import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from 'config/firebase';
import { AuthContext } from 'config/auth';
import Form from 'components/Form';

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
		<div className="accountInput">
			<h1 className="title">Log In</h1>
			<Form onSubmit={handleLogin} inputs={[ 'email', 'password' ]} submitText={'Log In'} />
		</div>
	);
};

export default withRouter(SignUp);
