import React from 'react';
import { Typography ,Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';
import useStyles from './styles';


const ProfileImage = ({value}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia image={value.image} alt={value.name} className={classes.media}/>
            <CardContent>
                <Typography variant="h5">{value.id}</Typography>
                <Typography variant="h4">{value.name}</Typography>
                <Typography variant="h5">{value.email}</Typography>
            </CardContent>
        </Card>
    )
}

export default ProfileImage;
