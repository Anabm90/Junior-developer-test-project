import React from 'react';
import { Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';

import './Form.scss';

const Basic = (props) => (
	<Formik
		initialValues={{
			email: `${props.email}`,
			username: `${props.user}`,
			last: `${props.last}`,
			connection: `${props.connection}`
		}}
		// validate={(values) => {
		// 	const errors = {};
		// 	if (!values.email) {
		// 		errors.email = 'Required';
		// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		// 		errors.email = 'Invalid email address';
		// 	}
		// 	return errors;
		// }}
		onSubmit={(values, { setSubmitting }) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				setSubmitting(false);
			}, 400);
		}}
	>
		{({
			values,
			errors,
			touched,
			handleChange,
			handleBlur,
			handleSubmit,
			isSubmitting
			/* and other goodies */
		}) => (
			<Row className="profile-form">
				<form onSubmit={handleSubmit}>
					<Row className="email">
						<Col xs={12} md={6}>
							<p>Email:</p>
						</Col>
						<Col xs={12} md={6}>
							<input
								type="email"
								name="email"
								// onChange={handleChange}
								// onBlur={handleBlur}
								value={values.email}
								readOnly="readOnly"
							/>
							{/* {errors.email && touched.email && errors.email} */}
						</Col>
					</Row>
					<Row className="username">
						<Col xs={12} md={6}>
							<p>Username:</p>
						</Col>
						<Col xs={12} md={6}>
							<input
								type="username"
								name="username"
								// onChange={handleChange}
								// onBlur={handleBlur}
								value={values.username}
								readOnly="readOnly"
							/>
							{/* {errors.username && touched.username && errors.username} */}
						</Col>
					</Row>
					<Row className="last">
						<Col xs={12} md={6}>
							<p>Last visit:</p>
						</Col>
						<Col xs={12} md={6}>
							<input
								type="last"
								name="last"
								// onChange={handleChange}
								// onBlur={handleBlur}
								value={values.last}
								readOnly="readOnly"
							/>
							{/* {errors.last && touched.last && errors.last} */}
						</Col>
					</Row>
					<Row className="connection">
						<Col xs={12} md={6}>
							<p>Number of logins:</p>
						</Col>
						<Col xs={12} md={6}>
							<input
								type={'number'}
								name="connection"
								// onChange={handleChange}
								onBlur={handleBlur}
								value={values.connection}
								readOnly="readOnly"
							/>
							{/* {errors.last && touched.last && errors.last} */}
						</Col>
					</Row>
				</form>
			</Row>
		)}
	</Formik>
);

export default Basic;
