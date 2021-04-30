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
        <div className = "App" >
            {/*<Navbar/>*/}
            {/*<Product />*/}

             <Login/>

            {/* for checking purpose */}
            {/*<Payment/>*/}
            
        </div>
    );
}
export default App;
