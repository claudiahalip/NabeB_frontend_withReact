import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import businessReducer from './reducers/businessReducer'
import neighborhoodReducer from './reducers/neighborhoodReducer'
import tunk from 'redux-thunk';


const reducer = combineReducers({businessReducer, neighborhoodReducer})
const store=createStore(reducer, applyMiddleware(tunk))
ReactDOM.render(
    <React.StrictMode>
        <Provider  store = {store}>
           <App />
        </Provider>
    </React.StrictMode>,
     document.getElementById('root'));


