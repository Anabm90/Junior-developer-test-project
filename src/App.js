import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import history from './utils/history';

import './App.css';

import Index from './pages/index/Index.js';
import Profile from './pages/profile/Profile';
import Hello from './pages/hello/Hello';
import Layout from './components/layout/Layout';

const App = () => {
	// const { isLoading, error } = useAuth0();

	// if (error) {
	// 	return <div>Oops... {error.message}</div>;
	// }

	// if (isLoading) {
	// 	return <p>Loading...</p>;
	// }
	const { isAuthenticated } = useAuth0();

	return (
		<Router history={history}>
			<div id="app">
				<Switch>
					<Route path="/" exact component={Index} />
					<Layout>
						<Route path="/profile" component={Profile} />
						<Route path="/hello" component={Hello} />
					</Layout>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
