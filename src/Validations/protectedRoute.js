import React from 'react'
import { Route, Redirect } from  'react-router-dom';
import Auth from "./AuthenticationClass";
export const ProtectedRoute = ({component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={
                (props) => {
                    console.log("Above the if " + Auth.isAuthenticated());
                    if (Auth.isAuthenticated()) {
                        console.log("If" + Auth.isAuthenticated());
                        return <Component {...rest}/>;
                    } else {
                        console.log("Else" + Auth.isAuthenticated());
                        return (<Redirect to={
                            {
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }
                        }/>);
                    }
                }
            }
        />
    );
};

/*
	This is where the authentication validation happens.
	If Authenticated properly then forward to the Route
	If not then return to a default route that we define.
	(Usually the return route will be either the landing page or the home route).
*/
