import './App.css';
import Login from './Components/Login/Login'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
//Testing Import Removed before pushing to the Repository.
import Product from "./Components/Store/Products/Product";
const App = () =>   {
    return (
        <div className = "App" >
            <Product/>
        </div>
    );
}
export default App;
