import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import allReducers from './Reducers/allReducer';
import { Provider } from "react-redux";
import productSaga from './Sagas/productSaga';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({reducer:allReducers,middleware:()=>[sagaMiddleware]});
sagaMiddleware.run(productSaga);

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);


