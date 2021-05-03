import React, { useState, useEffects, useDispatch } from 'react'
import { Avatar, Button, FormControlLabel, Grid, TextField, Typography, Paper, Checkbox } from "@material-ui/core";
import makeStyles from "./styles";
import { createUser } from '../../../actions/user'
import {CheckBox} from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Registration = () => {

    const dispatch = useDispatch();
    var flag = 'FALSE';
    const [userData, setUserData] = useState(
        {
            userName: '',
            email: '',
            passWord1: '',
            passWord2: '',
            userType: ''
        }
    );

    const passWordValidation = (userData) => {
        if (userData.passWord1 === userData.passWord2) {
            flag = 'PASS';
        } else {
            flag = "FALSE";
        }

    }

    const clear = () => {
        //Clear the Form.
    }

    //Submit Details 
    const handleSubmit = (e) => {
        //Stop page from loading.
        e.preventDefault();
        //submit data
        passWordValidation(userData);
        if (flag === 'PASS') {
            dispatch(createUser(userData));
        } else {
            console.log("Password Not Matching");
        }
        clear();
    }


    const classes = makeStyles();
    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Registration Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    autoFocus
                />

                <FormControlLabel
                    control={<CheckBox value="remember" color="primary" />}
                    label={"Remember Me"}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        Forgot password?
                    </Grid>
                    <Grid item>
                        Register
                    </Grid>
                </Grid>
            </form>



        </div>
    )
}

export default Registration;
