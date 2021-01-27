import React from 'react';
import Nav from './Nav/Nav'

import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../sessions/LogoutButton';

import './Layout.scss'

const Layout = ({ children }) => {
   
    return(
            <>
                <header>
                <Nav />
                    <h1 className="text-center">Welcome!</h1>
                    <LogoutButton/>
                </header>
                <main>{children}</main>
                </>
            )
}

export default Layout;