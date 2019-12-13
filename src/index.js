import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// --------------------------------

// ###############################
// REDUX
// ###############################

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'

import createSagaMiddleware from 'redux-saga'

// SAGAS

import rootSaga from './store/sagas/sagas'

// --------------------------------
// Ejemplo de un Middleware
// --------------------------------
const logger = store => {
    return next => {
        return action => {
            console.log("[Middleware] Dispatching", action)
            const result = next( action )
            console.log("[Middleware] next state", store.getState())
            return result
        }
    }
}


// -------------------------------
// REDUX-SAGA Middleware
// -------------------------------
const sagaMiddleware = createSagaMiddleware()
// -------------------------------

// -------------------------------
// REDUX DEV TOOLS
// -------------------------------
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// -------------------------------

// -------------------------------
// Crear STORE REDUX
// -------------------------------
const store = createStore( reducer, composeEnhancers(
    applyMiddleware( logger, sagaMiddleware)
))
// -------------------------------

// -------------------------------
// Activar Middleware redux-saga
// -------------------------------    
sagaMiddleware.run( rootSaga )
// -------------------------------    
// ###############################

ReactDOM.render(<Provider store={ store } ><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
