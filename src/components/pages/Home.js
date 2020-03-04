// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-spa";


const Home = () => {
    const {  isAuthenticated } = useAuth0();

    // const { loading, user } = useAuth0();

    // if (loading || !user) {
    //     return <div>Loading...</div>;
    //   }

    return (
        <>
            {isAuthenticated && (<h1> Home page Secret Content </h1>)}
            {!isAuthenticated && (<h1> Home page Please Log in.  This should never be seen</h1>)}
        </>
    );
};

export default Home;


/////


