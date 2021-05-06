import React from 'react'
import { Route, Redirect } from  'react-router-dom';
import auth from "./AuthenticationClass";
export const ProtectedRoute = ({component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={
                (props) => {
                    if (auth.isAuthenticated()) {
                        console.log("If" + auth.isAuthenticated());
                        return <Component {...rest}/>;
                    } else {
                        console.log("Else" + auth.isAuthenticated());
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
