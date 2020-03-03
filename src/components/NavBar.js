// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

  

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <Button  variant="contained" color="primary" onClick={() => loginWithRedirect({})}>Log in</Button>
            )}

            {isAuthenticated && <Button  variant="contained" color="primary" onClick={() => logout()}>Log out</Button>}



            {/* NEW - add a link to the home and profile pages */}
            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
                </span>
            )}
        </div>
    );
};

export default NavBar;


/////


