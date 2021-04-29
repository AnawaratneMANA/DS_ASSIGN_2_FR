import './App.css';
import Login from './Components/Login/Login'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
//Testing Import Removed before pushing to the Repository.
import Product from "./Components/Store/Products/Products";
import Navbar from "./Components/Store/Navigation/Navbar";
const App = () =>   {
    return (
        <div className = "App" >
            {/*<Navbar/>*/}
            {/*<Product/>*/}
            <Login/>
        </div>
    );
}
export default App;
