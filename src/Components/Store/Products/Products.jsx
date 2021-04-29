import React, { useState } from 'react';
import {Grid} from '@material-ui/core';
import Product from "./Product/Product";
import useStyle from "./styles";
/**
 * Use useEffect to call the method and get the object list as json.
 * Store it in the product array and iterate like this
 * UseEffects should run only one time when loading the page.
 * Database calling method should be invoke at App and pass the data as props.
 */

const products = [
    //Dummy values.
    { id: 1, name: "Macbook", description: "Apple M1 Macbook Air", price: '239,000/=', image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-qy49zfkn53-jpg.webp'},
    { id: 1, name: "Macbook", description: "Apple M1 Macbook Pro", price: '345,000/=', image: 'https://i.pcmag.com/imagery/reviews/05CbcW9cP4o0rqbCnVB2OFZ-1..1584707541.jpg'},
    { id: 1, name: "PC", description: "HP Elitebook 840", price: '320,000/=', image: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_HP_Elitebook_840_G5.jpg'}
]

const Products = () => {
    const classes = useStyle();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
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
