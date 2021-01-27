import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { Button } from 'react-bootstrap';
import './LoginButton.scss'

function LoginButton() {
	const { isAuthenticated, loginWithRedirect } = useAuth0();
	
	return (
		!isAuthenticated && (
			<>
				<div>

				<Button className="login-button" onClick={loginWithRedirect}>
					Please, Login to continue!
				</Button>
				</div>

				
			
			</>
		)
	);
}

export default LoginButton;
