import React, {useState} from 'react';
import {Avatar, Button, FormControlLabel, Grid, TextField, Typography} from "@material-ui/core";
import makeStyles from "./style";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch } from "react-redux";
import {CheckBox} from "@material-ui/icons";
import Auth from "../../../Validations/AuthenticationClass";
import {Link} from "react-router-dom";
import {loginUserValidation} from "../../../actions/user";
import axios from 'axios';
const Login = ({lg}) => {

    const dispatch = useDispatch();

    const [loginUser, setLoginUser] = useState([{
        userName: '',
        password: '',
    }]);

    const dataBaseCall  = (callback) =>  {
            axios.post("http://localhost:8073/validate", loginUser)
                .then(response => {
                    let values = response.data;
                    callback(values);
                });
    }

    //Creat another method to get the id of the user and pass to the login function.
    const getTheNameofTheValidateUser  = (callback) =>  {
        axios.post("http://localhost:8073/getValdatedUserId", loginUser)
            .then(response => {
                let values = response.data;
                callback(values);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var userId = "";
        dataBaseCall(function (value) {
                console.log(value === "Valid User");
                if (value === "Valid User") {
                    //parameter pass to the login function.
                    getTheNameofTheValidateUser(function (value) {
                        console.log(value);
                        console.log("testing id method");
                        userId = value; //Values is coming here.
                    })
                    //Pass the return value coming from the function.
                    //Configure a set Time out method. Make delay so that userId can store the value
                    console.log(userId);
                    Auth.login();
                } else if (value === "Wrong Password") {
                    Auth.logout();
                } else if (value === "User Not Found") {
                    Auth.logout();
                }
            }
        )
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
