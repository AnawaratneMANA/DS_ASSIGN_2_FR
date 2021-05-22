import React from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core';
import useStyles from './styles'
import CartItem from './CartItem/CartItem'
import {Link} from "react-router-dom";

function Cart({ cart , total }) {
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant = "subtitle1" className={classes.testing}> You Have No Items Currently In the Cart. Please Add items.</Typography>
    );
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.map((item) =>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant = "h4"> Subtotal:{total}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Link to="/payment">
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="secondary" >Checkout</Button>
                    </Link>

                </div>
            </div>

        </>

    );

    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h4" gutterBottom>
                Your Shopping cart
            </Typography>
            {!cart.length ? <EmptyCart/> : <FilledCart/>}

        </Container>

    )
}

export default Cart
