import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import {Provider} from 'react-redux';
import store from './store/store'
import { setCurrentUser} from './actions/authAction';

import './App.css';
import Auth from './components/authComponent/Auth'


// if(localStorage.user){

//   const decoded = JSON.parse(localStorage.getItem('user')).user
//   store.dispatch(decoded)
// }

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router history = {createHistory()}>
           <div>
            <Auth/>
          </div>
          </Router>
      </Provider>
      
    );
  }
}

export default App;
