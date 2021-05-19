import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {AccountCircle, ShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom'
//Use as the Logo. (Temp)
import ShopIcon from '../Store/Icons/shop-icon.png';
import useStyles from './styles';

const Navbar = ({cartitems}) => {
    const classes = useStyles();
    //console.log(cartitems.length)
    return (<React.Fragment>
        <AppBar position="fixed" className={classes.appBar} style={{background: '#2d2d2d'}}>
            <Toolbar>
                <Typography variant="h4" className={`${classes.title} ${classes.image}`} color="inherit">
                    <img src={ShopIcon} alt="Store" height="48px" className={classes.image}/>
                    <Link to="/" className={classes.title}>
                        Store
                    </Link>
                </Typography>
                <div className={classes.grow}>
                    <Typography variant="body1">
                        <Link to='/additem' className={classes.title}>
                            Dashboard.
                        </Link>
                    </Typography>
                </div>
                <div className={classes.grow}>
                    <Typography variant="body1">
                        <Link to='/payment' className={classes.title}>
                            Payment.
                        </Link>
                    </Typography>
                </div>
                <div className={classes.grow}>
                    <Typography variant="body1">
                        <Link to='/registration' className={classes.title}>
                            Registration
                        </Link>
                    </Typography>
                </div>
                <div className={classes.grow}>
                    <Typography variant="body1">
                        <Link to='/login' className={classes.title}>
                            Login
                        </Link>
                    </Typography>
                </div>
                <div className={classes.grow}>
                    <Typography variant="body1">
                        <Link to='/about' className={classes.title}>
                            About Us
                        </Link>
                    </Typography>
                </div>
                <div className={classes.button}>
                    <IconButton>
                        <Link to="/cart">
                        <Badge badgeContent={() => cartitems.length} color="secondary">
                            <ShoppingCart style={{fill: "White"}}/>
                        {/*</Badge>*/}
                        </Badge>
                        </Link>
                    <IconButton>
                        <Badge color="secondary">
                            <AccountCircle style={{fill: "White"}}/>
                        </Badge>
                    </IconButton>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </React.Fragment>)
}

export default Navbar;
