import React from 'react';
import {Card, CardMedia, CardActions, Typography, IconButton, CardContent, Icon, Button} from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';
import useStyle from './style'
const Product = ({items, addToCart }) => {
    //Connect the style here.
    const classes = useStyle();
    //Testing
    console.log(items);
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}
                       image={items.image}
                       title={items.title}/>

                       <CardContent>
                           <div className={classes.cardContent}>
                               <Typography variant= "h4" gutterBottom>
                                   {items.title}
                               </Typography>
                               <Typography variant= "h5" gutterBottom>
                                   {items.price}
                               </Typography>
                           </div>
                           <Typography variant= "body2" color= "textSecondary">
                               {items.description}
                           </Typography>
                       </CardContent>

                        <CardActions disableSpacing className={classes.cardActions}>
                            <IconButton aria-label= "Add to Cart" >
                                <AddShoppingCart onClick={() => {addToCart(items)}} />
                            </IconButton>
                            <Button className={classes.buyNowButton} color={"secondary"}>
                                Buy
                            </Button>
                        </CardActions>
        </Card>
    )
}
export default Product;
