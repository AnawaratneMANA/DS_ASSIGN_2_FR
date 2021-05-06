import React from 'react'
import {Avatar, Button, FormControlLabel, Grid, TextField, Typography} from "@material-ui/core";
import makeStyles from "./style";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {CheckBox} from "@material-ui/icons";
import Auth from "../../../Validations/AuthenticationClass";
const Login = ({lg}) => {


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const classes = makeStyles();
    return(
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <AccountCircleIcon/>
            </Avatar>
            <Typography component= "h1" variant= "h5">
                Sign In Form
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                    type = "password"
                    autoComplete="current-password"
                    autoFocus
                />

                <FormControlLabel
                    control={<CheckBox value = "remember" color = "primary"/>}
                    label={"Remember Me"}
                />

                <Button
                    type ="submit"
                    fullWidth
                    variant = "contained"
                    color = "primary"
                    onClick = {() => {
                        Auth.login(() => {
                            lg.history.push("/test");
                        })
                    }}
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
        );
}
export default Login;
