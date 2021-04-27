import './App.css';
import Login from './Components/Login/Login'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
const App = () =>   {
    return (
        <div className = "App" >
            <Login/>
        </div>
    );
}
export default App;