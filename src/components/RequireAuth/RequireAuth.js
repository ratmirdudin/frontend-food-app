import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {LINKS} from "../../routes/routes";
import {getTokens} from "../../app/auth/authService";

const RequireAuth = () => {
    const tokens = getTokens()
    return (
        <div>
            {tokens.accessToken
                ? <Outlet/>
                : <Navigate to={LINKS.Login}/>}
        </div>
    );
};

export default RequireAuth;