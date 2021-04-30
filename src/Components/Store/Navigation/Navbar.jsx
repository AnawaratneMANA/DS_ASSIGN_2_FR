import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
//Use as the Logo. (Temp)
import ShopIcon from '../Icons/shop-icon.png';
import useStyles from './styles';
const Navbar = () => {
    const classes = useStyles();
    return (<React.Fragment>
        <AppBar position ="fixed" className={classes.appBar} style={{ background: '#2d2d2d'}}>
            <Toolbar>
                <Typography variant= "h4" className={classes.title} color= "inherit">
                    <img src={ShopIcon} alt= "Store" height= "48px" className={classes.image}/>
                    Store
                </Typography>
                <div className={classes.grow}> </div>
                <div className={classes.button}>
                    <IconButton>
                        <Badge badgeContent={2} color = "secondary">
                            <ShoppingCart style={{fill: "White"}}/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </React.Fragment>)
}

export default Navbar;
