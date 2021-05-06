import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {AccountCircle, ShoppingCart} from '@material-ui/icons';
import { Link } from 'react-router-dom'
//Use as the Logo. (Temp)
import ShopIcon from '../Store/Icons/shop-icon.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (<React.Fragment>
        <AppBar position ="fixed" className={classes.appBar} style={{ background: '#2d2d2d'}}>
            <Toolbar>
                <Typography variant= "h4" className={classes.title} color= "inherit">
                    <img src={ShopIcon} alt= "Store" height= "48px" className={classes.image}/>
                    <Link to="/store">
                        Store
                    </Link>
                </Typography>
                <Typography size="small" variant="body1" className={classes.title}>
                    <Link to='/payment' className={classes.title}>
                        Payment
                    </Link>
                </Typography>

                <Typography variant="body1" size="small">
                    <Link to='/registration' className={classes.title}>
                        Registration
                    </Link>
                </Typography>

                <Typography variant="body1" size={"small"}>
                    <Link to='/additem' className={classes.title}>
                        AddItems
                    </Link>
                </Typography>

                <div className={classes.grow}>
                    <Typography variant="body1" >
                        <Link to='/additem' className={classes.title}>
                            New Add Items
                        </Link>
                    </Typography>
                </div>
                <div className={classes.button}>
                    <IconButton>
                        <Badge badgeContent={2} color = "secondary">
                            <ShoppingCart style={{fill: "White"}}/>
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Badge color = "secondary">
                            <AccountCircle style={{fill: "White"}}/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </React.Fragment>)
}

export default Navbar;
