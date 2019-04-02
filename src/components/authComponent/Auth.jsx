import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import styles from './Auth.module.css';
import Registration from './registration/Registration';
import Login from './login/Login';

const Auth=()=>{
    return (
        <div className={styles.appWrapper}>
            <section className={styles.content}>
                <div className={styles.form}>
                    <Route path='/registration' component={Registration}/>
                    <Route path='/' component={Login} exact/>
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

export default Auth;