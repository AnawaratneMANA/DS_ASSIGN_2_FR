import './App.css';
import React, {useEffect} from 'react'
import { useDispatch } from "react-redux";
import Login from './Components/Login/Login'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
//Testing Import Removed before pushing to the Repository.
import Product from "./Components/Store/Products/Products";
import Navbar from "./Components/Store/Navigation/Navbar";
import Payment from "./Components/Payment/Payment";
import { getItems} from "./actions/item";
import AddItems from './Components/AddItems/AddItems';
import ItemList from './Components/AddItems/ItemList';
const App = () =>   {
    const dispatch = useDispatch();
    //Store Population Method.
    /**
     *  Call `fetchProductItems` inside a useEffect hook.
     *  pass the JSON as a prop to Store component.
     */

    useEffect(() => {
        dispatch(getItems());
    },[dispatch])

    return (
        <div className = "" >
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Product}></Route>
                    <Route path="/payment" component={Payment}></Route>
                    <Route path="/registration" component={Login}></Route>
                    <Route path="/store" component={Product}></Route>
                    <Route path="/additem" component={AddItems}></Route>
                    <Route path="/itemlist" component={ItemList}></Route>
                </Switch>
            </Router>

             {/* <Login/> */}

            {/* for checking purpose */}
            {/*<Payment/>*/}
            
        </div>
    );
}
export default App;
