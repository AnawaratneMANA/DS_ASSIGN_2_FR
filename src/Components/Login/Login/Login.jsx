import React, {useState} from 'react'
import {Avatar, Button, FormControlLabel, Grid, TextField, Typography} from "@material-ui/core";
import makeStyles from "./style";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {CheckBox} from "@material-ui/icons";
import Auth from "../../../Validations/AuthenticationClass";
import {Link} from "react-router-dom";
import {loginUserValidation} from "../../../actions/user";
const Login = ({lg}) => {

    const [loginUser, setLoginUser] = useState([{
        userName: '',
        password: '',
    }]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginUser);
        //const flag = loginUserValidation(loginUser);
        const flag = '';
        if (flag === true){
            //Call the Login method.
        } else {
            //Call the alert method (Error Message).
        }
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
                    onChange={(e) => setLoginUser({ ...loginUser, userName: e.target.value })}

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
                    onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
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
                    <Link to="/test"> TEST </Link>
                    <Button onClick = {() => {
                        Auth.logout(() => {
                            lg.history.push("/");
                        })
                    }} > Log out </Button>
                </Grid>
            </form>
        </div>
        );
}
export default Login;
