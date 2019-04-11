import React from 'react';
import { Component } from 'react';
import logo from "../../images/hart2.png"

import styles from './Header.module.css';

const Header= ()=>{
    return(
        <div>
            <hr/>
            <header>
                <img src={logo}></img>
                <div className={styles.logOut}>
                    <button>Выйти</button>
                </div>
            </header>
            <hr/>
        </div>
    )
}

export default Header