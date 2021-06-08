import React from 'react';
import { Typography ,Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({item ,removeFromCart}) => {

    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.image} alt={item.name} className={classes.media}/>
            <CardContent>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="h5">{item.price}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>

                    <Typography>{item.qun}</Typography>

                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => removeFromCart(item)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;
