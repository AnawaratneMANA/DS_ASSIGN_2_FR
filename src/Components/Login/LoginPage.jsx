import React from 'react';
import Login from './Login/Login'
import { CssBaseline, Grid, Paper } from "@material-ui/core";
import makeStyles from "./style";
import Auth from "../../Validations/AuthenticationClass";
function LoginPage(props) {
    const classes = makeStyles();
    return (<React.Fragment>
        <CssBaseline />
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image}> </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
            >
                <Login lg={props} />
            </Grid>
        </Grid>
    </React.Fragment>)
}
export default LoginPage;
