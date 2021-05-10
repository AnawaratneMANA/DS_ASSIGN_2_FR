import React, { useState } from 'react';
import {Container, Grid, Input, TextField, Typography} from '@material-ui/core';
import Product from "./Product/Product";
import useStyle from "./styles";
import {useSelector} from "react-redux";
import SearchBar from 'material-ui-search-bar';

/**
 * Use useEffect to call the method and get the object list as json.
 * Store it in the product array and iterate like this
 * UseEffects should run only one time when loading the page.
 * Database calling method should be invoke at App and pass the data as props.
 */

const products = [
    //Dummy values.
    { id: 1, name: "DragonFly", description: "Apple M1 Macbook Air", price: '239,000/=', image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-qy49zfkn53-jpg.webp'},
    { id: 2, name: "Zenbook", description: "Apple M1 Macbook Pro", price: '345,000/=', image: 'https://i.pcmag.com/imagery/reviews/05CbcW9cP4o0rqbCnVB2OFZ-1..1584707541.jpg'},
    { id: 3, name: "Latitude", description: "HP Elitebook 840", price: '320,000/=', image: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_HP_Elitebook_840_G5.jpg'}
]

const Products = ({addToCart}) => {
    //fetch items from the redux store.
    const items = useSelector((state) => state.items );
    //Here there is a bug in server response it not a JSON type object fix it and remove this.
    const classes = useStyle();

    //Creating a Hook for Search Items.
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <main className={classes.content}>
            {/*Add the search input here. Following Line make spaces from top*/}
            <div className={classes.toolbar}/>
            <Container className={classes.SearchBar} maxWidth="md">
            <Typography className={classes.searchBarHeading}>Search Items</Typography>
            <TextField
                id="filled-full-width"
                label="Search"
                style={{ margin: 8 }}
                placeholder="Search Items.."
                helperText="Search Items By Title"
                fullWidth
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                margin="normal"
                variant="filled"
            />
            </Container>
            
            <Grid container justify= "center" spacing={4}>
                {products.filter((val) => {
                    if(searchTerm == ""){
                        return val
                    } else if(val.description.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((myJsonString) => (
                    <Grid item key={myJsonString.id} xs={12} sm={6} md={4} lg={3}>
                        <Product items={myJsonString} addToCart={addToCart}  />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
export default Products;
