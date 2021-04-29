import React from 'react';
import {Card, CardMedia, CardActions, Typography, IconButton, CardContent} from "@material-ui/core";
import { AddShoppingCart} from '@material-ui/icons';

const Product = ({product }) => {
    //Connect the style here.
    const classes = '';
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}
                       image=''
                       title={product.name}/>

                       <CardContent>
                           <div className={classes.cardContent}>

                           </div>
                       </CardContent>
        </Card>
    )
}
export default Product;
