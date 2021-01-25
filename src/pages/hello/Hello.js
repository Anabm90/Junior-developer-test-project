import React from 'react';
import HelloForm from '../../components/HelloForm';
import { Container } from 'react-bootstrap';

import './Hello.scss';

export default function Hello() {
	return (
		<Container className="hello">
			<HelloForm />
		</Container>
	);
}
