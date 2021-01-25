import { React } from 'react';
import history from '../../utils/history';
import { Container, Row, Button, Col } from 'react-bootstrap';

const cancelRedirect = () => {
	history.push('/profile');
};

var moment = require('moment');
let date = moment().utcOffset('+01:00').format('DD/MM/YYYY hh:mm:ss a');
const BasicForm = ({
	handleChange,
	handleSubmit,
	isSubmitting,
	resetForm,
	values,
	errors,
	touched,
	isValid,
	dirty,
	setFieldValue,
	onChange,
	handleBur,
	setSubmitting
}) => (
	<Container className="basic-form">
		<form onSubmit={handleSubmit}>
			<Row className="who">
				{dirty ? (
					<label>
						hello {values.name}. Now it's {date}
					</label>
				) : (
					<label>Who are you?</label>
				)}
			</Row>
			<Row className="text-box">
				<input name="name" className="name" onChange={handleChange} onBlur={handleBur} value={values.name} />

				{/* {touched.name && errors.name && <p className="help is-danger">{errors.name}</p>} */}
			</Row>
			<Row className="buttons">
				<Button className="submit" disabled={!dirty} type="submit">
					Submit
				</Button>

				<Button
					className="cancel"
					variant="danger"
					type="button"
					disabled={!dirty}
					onClick={resetForm && cancelRedirect}
				>
					Cancel
				</Button>

				<Button
					className="exit"
					variant="primary"
					type="button"
					disabled={dirty}
					onClick={resetForm && cancelRedirect}
				>
					Exit
				</Button>
			</Row>
		</form>
	</Container>
);

export default BasicForm;
