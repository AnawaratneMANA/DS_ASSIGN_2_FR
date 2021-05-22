import React from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core';

import useStyles from './styles'
import CartItem from './CardItem/CartItem'

function Cart({ cart }) {
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant = "subtitle1"> You Have No Items Currently In the Cart. Please Add items.</Typography>
    );
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) =>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant = "h4"> Subtotal:{/* API Call */}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="secondary">Checkout</Button>
                </div>
            </div>

        </>

    );

    if(!cart.line_items) return "Loading..."
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h4" gutterBottom>
                Your Shooping cart
            </Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}

        </Container>

    )
}

export default Cart
