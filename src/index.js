import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route,Link } from 'react-router-dom';
import Visitors from './components/visitors/visitors';

const routing = (
    <Router>
        <switch>
            <Route exact path="/" component={App}/>
            <Route path="/visitor" component={Visitors}/>
        </switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
