import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {appStateType} from "./Redux/Store";
import {store} from "./Redux/ReduxStore";
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = (state: appStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

