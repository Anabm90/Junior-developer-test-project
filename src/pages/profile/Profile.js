import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import Form from '../../components/Form';
import Spinner from '../../components/shared/Spinner.js';

import './Profile.scss';

export const ProfileComponent = () => {
	const { user } = useAuth0();
	let date = user.updated_at;
	console.log(date);
	var moment = require('moment');
	let formatDate = moment(date).format('DD/MM/YYYY');
	console.log(formatDate);
	return (
		<main>
			<Container className="profile">
				<Row>
					<Col xs={12} md={6} className="text-center">
						<img src={user.picture} alt="Profile" />
					</Col>
					<Col xs={12} md={6} className="text-center form-profile">
						<Form
							user={user.nickname}
							email={user.email}
							last={formatDate}
							connection={user.logins_count}
						/>
					</Col>
				</Row>
			</Container>
		</main>
	);
};

export default withAuthenticationRequired(ProfileComponent, {
	onRedirecting: () => <Spinner />
});
