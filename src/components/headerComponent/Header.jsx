import React from 'react';
import { Component } from 'react';
import logo from "../../images/hart2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { logoutUser } from '../../actions/authAction'
import { connect } from 'react-redux';

import styles from './Header.module.css';


class Header extends Component{
    constructor(){
        super();
        this.onLogoutUser=this.onLogoutUser.bind(this)
    }

    onLogoutUser(e){
        e.preventDefault()
        this.props.logoutUser()
    }


    render(){
        return(
            <div>
                <hr/>
                <header>
                    <img src={logo} alt="logo"></img>
                    <div className={styles.logOut}>
                       <FontAwesomeIcon icon="phone" />
                        <p> (095)0044004</p>
                        <button onClick={this.onLogoutUser}>Выйти</button>
                    </div>
                </header>
                <hr/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    auth:state.auth
})

export default connect(mapStateToProps,{ logoutUser})(Header)