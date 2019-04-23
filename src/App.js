import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import {Provider} from 'react-redux';
import store from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faStroopwafel,faPhone,faNotesMedical } from '@fortawesome/free-solid-svg-icons'


import './App.css';
import Auth from './components/authComponent/Auth'
import DashBord from './layout/dashbordPage/DashBord'


library.add(faStroopwafel,faPhone,faNotesMedical)

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
