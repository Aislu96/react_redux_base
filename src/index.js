import React from 'react';
import ReactDOM from 'react-dom';
import {thunk} from 'redux-thunk';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from 'redux';//Создает хранилище Redux , в котором хранится полное дерево состояний вашего приложения.
import {rootReducer} from "./redux/rootReducer";
import {spamFilter} from "./redux/middleware";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        spamFilter
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
