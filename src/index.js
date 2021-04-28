import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk'
import App from './App';
//Create Reducer and Link here.
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
