import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Nav.scss'

export default function Navigation() {
    return (
        <>
		<Navbar expand="lg">
			<Navbar.Brand href="/">ThermoHuman</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavDropdown title="Options" id="basic-nav-dropdown">
						<NavDropdown.Item href="/profile">User profile</NavDropdown.Item>
						<NavDropdown.Item href="/hello">Hello world!</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
            </Navbar>
            </>
	);
}
