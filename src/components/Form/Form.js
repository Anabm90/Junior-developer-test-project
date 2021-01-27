import React from 'react';
import { Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';

import './Form.scss';

const Form = (props) => (
	<Formik
		initialValues={{
			email: `${props.email}`,
			username: `${props.user}`,
			last: `${props.last}`,
			connection: `${props.connection}`
		}}
	>
		{({ values, handleSubmit }) => (
			<Row className="profile-form">
				<form onSubmit={handleSubmit}>
					<Row className="email">
						<Col xs={12} md={6}>
							<p>Email:</p>
						</Col>
						<Col xs={12} md={6}>
							<input type="email" name="email" value={values.email} readOnly="readOnly" />
						</Col>
					</Row>
					<Row className="username">
						<Col xs={12} md={6}>
							<p>Username:</p>
						</Col>
						<Col xs={12} md={6}>
							<input type="username" name="username" value={values.username} readOnly="readOnly" />
						</Col>
					</Row>
					<Row className="last">
						<Col xs={12} md={6}>
							<p>Last visit:</p>
						</Col>
						<Col xs={12} md={6}>
							<input type="last" name="last" value={values.last} readOnly="readOnly" />
						</Col>
					</Row>
					{/* <Row className="connection">
						<Col xs={12} md={6}>
							<p>Number of logins:</p>
						</Col>
						<Col xs={12} md={6}>
							<input type="number" name="connection" value={values.connection} readOnly="readOnly" />
						</Col>
					</Row> */}
				</form>
			</Row>
		)}
	</Formik>
);

export default Form;
