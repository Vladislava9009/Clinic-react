import React from 'react';
import { Component } from 'react';
import logo from "../../images/hart2.png"

import styles from './Content.module.css';

// const userName=JSON.parse(localStorage.getItem('user')).user.fullName


const Content= ()=>{
    return(
        <div>
          {/* <h4>Здравствуйте,{userName} !</h4> */}
          <p>В личном кабинете Вы можете записаться на прем, просмотреть предстоящие записи </p>
          <div className={styles.reception}>
                <div className={styles.yourVisits}>
                <h4>Предстоящие записи</h4>
                <ul>
                    <li>Запись</li>
                    <li>Запись</li>
                    <li>Запись</li>
                </ul>
                </div>
                <div className={styles.map}>
                <h4>Предстоящие записи</h4>
                </div>
                <div className={styles.datePicker}>
                <h4>Предстоящие записи</h4>
                </div>
          </div>

        </div>
    )
}

export default Content