import './App.css';
import React, {useEffect} from 'react'
import Login from './Components/Login/Login'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
//Testing Import Removed before pushing to the Repository.
import Product from "./Components/Store/Products/Products";
import Navbar from "./Components/Store/Navigation/Navbar";
const App = () =>   {

    //Store Population Method.
    /**
     *  Call `fetchProductItems` inside a useEffect hook.
     *  pass the JSON as a prop to Store component.
     */
    const fetchProductItems = async () => {
        //Call the DB method.
    }

    useEffect(() => {
        //Call -> fetchProductItems();
    },[])

    return (
        <div className = "App" >
            {/*<Navbar/>*/}
            {/*<Product/>*/}
            <Login/>
        </div>
    );
}
export default App;
