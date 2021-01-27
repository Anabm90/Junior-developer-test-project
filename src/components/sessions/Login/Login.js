import React from 'react';
import LoginButton from '../LoginButton/LoginButton';
import backgroundVideo from './Video/thermohuman.mp4';
import './Login.scss';


export default function Login() {
	
	return (
		<>
		
		<LoginButton />
				
		<video autoPlay loop muted className="video">
			<source src={backgroundVideo} type="video/mp4" />
		</video>
		

		</>
	);
}
