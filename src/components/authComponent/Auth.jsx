import React from 'react';
import { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

import Registration from './registration/Registration';
import Login from './login/Login';

import styles from './Auth.module.css';


class Auth extends Component{
    render(){
        if(localStorage.user){

            const decoded = JSON.parse(localStorage.getItem('user')).user
            console.log(decoded)
            return <Redirect to='/dashbord'/>
          } 
          

        return (
            <div className={styles.appWrapper}>
                <section className={styles.content}>
                    <div className={styles.form}>
                        <Route path='/auth/registration' component={Registration}exact/>
                        <Route path='/auth/login' component={Login} exact/>
                    </div> 
                    <div className={styles.text}>
                        <h1>Медецинский центр</h1>
                        <h3>В Харькове</h3>
                        <h3>Многопрофильная современная клиника</h3>
                    </div>
                </section>  
          </div>
        )

    }
    
}
export default Auth;

