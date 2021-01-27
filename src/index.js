import React from 'react';
import ReactDOM from 'react-dom';
import history from './utils/history';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// const onRedirectCallback = (appState) => {
// 	history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
// };

ReactDOM.render(
	<Auth0Provider
		domain="dev-iy-1xmit.eu.auth0.com"
		clientId="9gSZcbJ3josj8FrO7DQ0iPpMxZMe9oqo"
		redirectUri="http://localhost:3000/profile"
		scope="openid profile read:timesheets create:timesheets"
	>
		<App />
	</Auth0Provider>,
	document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
