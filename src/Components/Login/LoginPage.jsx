import React from 'react';
import Login from './Login/Login'
import {CssBaseline, Grid, Paper} from "@material-ui/core";
import makeStyles from "./style";
function LoginPage() {
    const classes = makeStyles();
    return (<React.Fragment>
        <CssBaseline />
        <Grid container component ="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image}> </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
            >
                <Login/>
            </Grid>
        </Grid>
    </React.Fragment>)
}
export default LoginPage;
