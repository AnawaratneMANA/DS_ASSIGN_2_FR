import React, { useState, useEffects } from 'react';
import { Avatar, Button, FormControlLabel, Grid, TextField, Typography, Paper, CssBaseline } from "@material-ui/core";
import { createUser } from '../../actions/user';
import { useDispatch, useSelector } from 'react-redux';
import makeStyles from "../Registration/style";
import Registration from "../Registration/Registration/Registration";
const RegistrationPage = () => {
    const classes = makeStyles();
    return (
        <React.Fragment>

            <CssBaseline />
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Grid item xs={false} sm={4} md={7} className={classes.image}> </Grid>
                    <Registration />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default RegistrationPage;
