import React from 'react';
import { Formik } from 'formik';
import BasicForm from './BasicForm';

import './HelloForm.scss';

const validation = (values) => {
	let errors = {};

	// if (!values.name) {
	// 	errors.name = 'Who are you?';
	// } else {
	// 	errors.name = `Hello, ${values.name}`;
	// }

	return errors;
};

const HelloForm = () => (
	<div className="hello-form">
		<Formik
			initialValues={{
				name: ''
			}}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert('holaaa');
					console.log(actions);
					actions.setSubmitting(false);
				}, 2000);
			}}
			validate={validation}
		>
			{(props) => <BasicForm {...props} />}
		</Formik>
	</div>
);

export default HelloForm;
