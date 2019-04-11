import React from 'react';
import { Component } from 'react';
import { Redirect} from 'react-router-dom';

import Header from '../../components/headerComponent/Header'
import Content from '../../components/contentComponent/Content';



// import styles from './Auth.module.css';


class DashBord extends Component{
    render(){
        if(!localStorage.user){

           
            return <Redirect to='/auth/registration'/>
          } 

        return (
            <div>
              <Header/>
               <Content/>
               <footer></footer>
            </div>
        )

    }
    
}
export default DashBord;

