import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import './App.css';
import Auth from './components/authComponent/Auth'

class App extends Component {
  render() {
    return (
      <Router history = {createHistory()}>
         <div>
        <Auth/>
      </div>
      </Router>
    );
  }
}

export default App;
