import './App.css';
import React, {useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import {BrowserRouter as Router, Switch, Link, Route, BrowserRouter} from 'react-router-dom';
//Testing Import Removed before pushing to the Repository.
import Product from "./Components/Store/Products/Products";
import Navbar from "./Components/Navigation/Navbar";
import Payment from "./Components/Payment/Payment";
import { getItems } from "./actions/item";
import AddItems from './Components/AddItems/AddItems';
import ItemList from './Components/AddItems/ItemList';
import LoginPage from "./Components/Login/LoginPage";
import PaymentComponent3 from "./Components/Payment/PaymentComponent3";
import PaymentComponent4 from "./Components/Payment/PaymentComponent4";

import RegistrationPage from './Components/Registration/RegistrationPage'
import {ProtectedRoute} from "./Validations/protectedRoute";
import Test from "./Components/Testing/TestingComponent";
import UpdateItems from "./Components/AddItems/UpdateItems";
import Cart from "./Components/Cart/Cart";
// import CartItem from "./Components/Cart/CartItem/CartItem";
import CartItem from "./Components/Cart/Cart";

const App = () => {
    const dispatch = useDispatch();
    var stringArray = [];
    //Store Population Method.
    /**
     *  Call `fetchProductItems` inside a useEffect hook.
     *  pass the JSON as a prop to Store component.
     */
    const [cartItems, setCartItems] = useState([])
    const [cartItem, setCartItem] = useState([
        {

        }
    ])


    const addToCart = (product, quantity) => {

    }

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch])

    return (
        <div className="">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/login" component={LoginPage}></Route>
                    <ProtectedRoute exact path="/payment" component={Payment}></ProtectedRoute>
                    <Route exact path="/registration" component={RegistrationPage}></Route>
                    <Route exact path="/" component={Product}></Route>
                    <Route exact path="/additem" component={AddItems}></Route>
                    <Route exact path="/itemlist" component={ItemList}></Route>
                    <Route exact path="/payment/update-payment1/:id" component={PaymentComponent3}></Route>
                    <Route exact path="/payment/update-payment2/:id" component={PaymentComponent4}></Route>
                    <Route exact path="/itemlist/update-item/:id" component={UpdateItems}></Route>
                    <Route exact path="/cart">
                        <Cart cart={cartItems}/>
                    </Route>
                    <ProtectedRoute exact path="/test" component={Test}/>

                </Switch>
            </BrowserRouter>

            {/* <Login/> */}

            {/* for checking purpose */}
            {/*<Payment/>*/}

        </div>
    );
}
export default App;
