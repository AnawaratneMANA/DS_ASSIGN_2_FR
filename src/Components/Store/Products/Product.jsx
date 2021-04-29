import React from 'react';
import {Grid} from '@material-ui/core';
import Product from "./Product/Product";

const products = [
    //Dummy values.
    { id: 1, name: "Macbook", description: "Apple M1 Macbook Air", price: '239,000/='},
    { id: 1, name: "Macbook", description: "Apple M1 Macbook Pro", price: '345,000/='},
    { id: 1, name: "PC", description: "HP Elitebook 840", price: '320,000/='}
]

const Products = () => {
    return (
        <main>
            <Grid container justify= "center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
export default Products;
