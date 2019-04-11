import React, { Component } from 'react';
import {BrowserRouter,Route, Switch,Redirect} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import {Provider} from 'react-redux';
import store from './store/store'

import './App.css';
import Auth from './components/authComponent/Auth'
import DashBord from './layout/dashbordPage/DashBord'




class App extends Component {
  render() {
    // <Redirect to='/auth'/>
    return (
      <Provider store={store}>
          <BrowserRouter history = {createHistory()}>
           <div>
             <Switch>
                <Route path='/auth' component={Auth} />
                <Route path='/dashbord' component={DashBord} exact/>
             </Switch> 
          </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
