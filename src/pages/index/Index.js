import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import Login from '../../components/sessions/Login';
import Layout from '../../components/layout/Layout'


export default () => {

    const { isAuthenticated } = useAuth0()
    return (
        <>
            
            {isAuthenticated ? 
                
                <Layout />    
                :
                <Login />
            }
            
        </>
    
    )
};
