
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';



import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'


const PageContent = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <>


            {isAuthenticated && (
                <h1>I am secret content</h1>
            )}

            {!isAuthenticated && (
                <h1>Please Log in to continue</h1>
            )}




        </>
    );
};

export default PageContent;