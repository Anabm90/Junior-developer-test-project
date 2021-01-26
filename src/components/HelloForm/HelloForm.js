import { React, useState } from 'react';
import { Formik } from 'formik';
import history from '../../utils/history';

import { Container, Row, Button, Col } from 'react-bootstrap';
import './HelloForm.scss';

function Hello() {
	var moment = require('moment');
	let date = moment().utcOffset('+01:00').format('DD/MM/YYYY hh:mm:ss a');

	const cancelRedirect = () => {
		history.push('/profile');
	};

	return (
		<div className="hello-form">
			<Formik
				initialValues={{
					name: ''
				}}
				onSubmit={(values, actions, setName) => {
					setTimeout(() => {
						document.getElementById('who').innerHTML = `Hello, ${values.name}! Now it's ${date}`;
						actions.setSubmitting(false);
					}, 2000);
				}}
			>
				{(props) => (
					<Container className="basic-form">
						<form onSubmit={props.handleSubmit} noValidate>
							<Row className="who">
								<h3 id="who" className="text-center">
									Who are you?
								</h3>
							</Row>
							<Row className="text-box">
								<input
									type="text"
									onChange={(e) => {
										props.handleChange(e);
										let someValue = e.currentTarget.value;
										console.log(someValue);
										// props.setFieldValue(someValue);
									}}
									// onBlur={props.handleBlur}
									value={props.values.name}
									name="name"
								/>
							</Row>
							<Row className="buttons">
								<Button className="submit" disabled={!props.dirty || props.isSubmitting} type="submit">
									Submit
								</Button>

								<Button
									className="cancel"
									variant="danger"
									type="button"
									disabled={!props.dirty}
									onClick={props.resetForm && cancelRedirect}
								>
									Cancel
								</Button>

								<Button
									className="exit"
									variant="primary"
									type="button"
									disabled={props.dirty}
									onClick={props.resetForm && cancelRedirect}
								>
									Exit
								</Button>
							</Row>
						</form>
					</Container>
				)}
			</Formik>
		</div>
	);
}

export default Hello;
