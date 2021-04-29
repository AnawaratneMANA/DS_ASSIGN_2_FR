import React from 'react';
import {Card, CardMedia, CardActions, Typography, IconButton, CardContent, Icon} from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';
import useStyle from './style'
const Product = ({product }) => {
    //Connect the style here.
    const classes = useStyle();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}
                       image=''
                       title={product.name}/>

                       <CardContent>
                           <div className={classes.cardContent}>
                               <Typography variant= "h5" gutterBottom>
                                   {product.name}
                               </Typography>
                               <Typography variant= "h5" gutterBottom>
                                   {product.price}
                               </Typography>
                           </div>
                           <Typography variant= "h2" color= "textSecondary">
                               {product.description}
                           </Typography>
                       </CardContent>

                        <CardActions disableSpacing className={classes.cardActions}>
                            <IconButton aria-label= "Add to Cart">
                                <AddShoppingCart />
                            </IconButton>
                        </CardActions>
        </Card>
    )
}
export default Product;
