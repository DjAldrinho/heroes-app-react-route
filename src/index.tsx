import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {NavBarComponent} from "./components/nav-bar/NavBar";


ReactDOM.render(
    <React.StrictMode>
        <NavBarComponent/>
    </React.StrictMode>,
    document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
