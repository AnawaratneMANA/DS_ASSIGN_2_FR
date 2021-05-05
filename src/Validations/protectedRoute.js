import React from 'react'
import { Route } from  'react-router-dom';
import auth from "./auth";
export const ProtectedRoute = ({component: Component, ...rest}) => {
	return (
		<Route 
		{...rest}
		render={
			(props) => {
				if (auth.isAuthenticated()){
					return <Component {...props}/>;
				} else {
					return <Redirect to={
						{
							pathname: "/",
							state: {
								from: props.location
							}
						}
					} />
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