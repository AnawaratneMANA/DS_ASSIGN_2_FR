import React from 'react'
import {Grid, Paper} from "@material-ui/core";
import makeStyles from "./styles";
import {data} from "./Data/Data";
import {spacing} from "@material-ui/system";
import ProfileImage from "./ProfileImage/ProfileImage";


function AboutUs() {
    const classes = makeStyles();

    const users = [
        {id:'EMP01', image:'https://cdn.corporatefinanceinstitute.com/assets/macro-manager.jpeg', name:'Josep Collin', email:'akash22@gmail.com' },
        {id:'EMP02', image:'https://upload.wikimedia.org/wikipedia/commons/c/c0/Minho_at_the_2013_Melon_Music_Awards_01_%28cropped%29.jpg', name:'Choi Minho', email:'Choi@123gmail.com' },
        {id:'EMP03', image:'https://upload.wikimedia.org/wikipedia/commons/1/15/Michelle_Dilhara.jpg', name:'Michel Dilhara', email:'dilhar2020@gamil.com' }
    ]
    return (
        <React.Fragment>
            <div className={classes.toolbar}/>
            <Grid container className={classes.root}>
                <Grid container justify={"center"}>
                    <h2 className={classes.h2}>About Us</h2>
                </Grid>
                <Grid container justify={"center"}>
                    <h4>{data.data}</h4>
                </Grid>
                <Grid container>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={spacing}>
                                {users.map((value) => (
                                    <Grid key={value} item>
                                        <ProfileImage value={value} className={classes.paper}/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default AboutUs;
