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


const DumbHome = () => {
    // const { loading, user, isAuthenticated } = useAuth0();

    // const { loading, user } = useAuth0();

    // if (loading || !user) {
    //     return <div>Loading...</div>;
    //   }

    return (
        <>
            <h1>Dumb Home not secure</h1>
        </>
    );
};

export default DumbHome;


/////


