import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk'
import App from './App';
//Create Reducer and Link here.
import reducers from './reducers'
import {BrowserRouter} from "react-router-dom";

//Redux Store.
const store = createStore(reducers, compose(applyMiddleware(thunk)));

render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
