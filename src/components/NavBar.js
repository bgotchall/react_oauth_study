// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';

import Profile from "./Profile";


import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'


const NavBar = () => {
    const { loading, user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    // const { loading, user } = useAuth0();

    // if (loading || !user) {
    //     return <div>Loading...</div>;
    //   }
    return (
        <>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        {isAuthenticated && <Nav.Link href="/photos">Photos</Nav.Link>}
                        {isAuthenticated && <Nav.Link href="/calendar">Calendar</Nav.Link>}
                        {isAuthenticated && <Nav.Link href="/signup">Signups</Nav.Link>}
                        {isAuthenticated && <Nav.Link href="/news">News</Nav.Link>}
                        {isAuthenticated && <PrivateRoute path="/profile" component={Profile} />}

                        {isAuthenticated && (
                            <NavDropdown title="Admin" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/membersManage">Manage Members</NavDropdown.Item>
                                <NavDropdown.Item href="/signups">Manage Signups</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something Else</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            // <Avatar alt={user.name} src={user.picture} />
                        )}
                    </Nav>


                    {!isAuthenticated && <Button variant="contained" color="primary" onClick={() => loginWithRedirect({})}>Log in</Button>}

                    {isAuthenticated && <Button variant="contained" color="primary" onClick={() => logout()}>Log out</Button>}


                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>


        </>
    );
};

export default NavBar;


/////


