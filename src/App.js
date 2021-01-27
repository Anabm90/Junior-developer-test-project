import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';

import './App.css';

import Index from './pages/index/Index.js';
import Profile from './pages/profile/Profile';
import Hello from './pages/hello/Hello';
import Layout from './components/layout/Layout';

const App = () => {
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
