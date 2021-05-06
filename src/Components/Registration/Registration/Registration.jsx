import React, { useState, useEffects } from 'react'
import { useDispatch } from 'react-redux'
import {
    Avatar,
    Button,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
    Paper,
    Checkbox,
    FormControl, FormLabel, RadioGroup, Radio
} from "@material-ui/core";
import makeStyles from "./styles";
import { createUser } from '../../../actions/user'
import { CheckBox } from "@material-ui/icons";
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
                    label="User Name"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    type='text'
                    value={userData.userName}
                    onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Email"
                    name="password"
                    type="email"
                    autoComplete="current-password"
                    autoFocus
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="Text"
                    autoComplete="current-password"
                    autoFocus
                    value={userData.passWord1}
                    onChange={(e) => setUserData({ ...userData, passWord1: e.target.value })}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Re-Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    autoFocus
                    value={userData.passWord2}
                    onChange={(e) => setUserData({ ...userData, passWord2: e.target.value })}
                />
                {/*value={value} onChange={handleChange}*/}
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" onChange={(e) => setUserData({ ...userData, userType: e.target.value })} >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset">
                    <FormControlLabel
                        control={<CheckBox value="remember" color="primary" />}
                        label={"Remember Me"}
                    />
                </FormControl>

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
