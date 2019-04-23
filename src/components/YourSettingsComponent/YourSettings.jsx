import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import { updateUser } from '../../actions/userAction'

import styles from './YourSettings.module.css';





class YourSettings extends Component{
    constructor(){
        super();
        this.state={
            name:JSON.parse(localStorage.getItem('user')).fullName,
            email:JSON.parse(localStorage.getItem('user')).email,
            password:JSON.parse(localStorage.getItem('user')).password,
            
        }

        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const id=JSON.parse(localStorage.getItem('user'))._id
        const newUserData={
            fullName: this.state.name,
            email: this.state.email,
            password: this.state.password,
            
        }
        this.props.updateUser(newUserData, id)
    }
    componentDidMount(){
        
    }

    render(){
        const userName=JSON.parse(localStorage.getItem('user')).fullName;
        const userEmail=JSON.parse(localStorage.getItem('user')).email;
        return(
            <div className={styles.settings}>
               <h4>Персональные настройки</h4>
               <form noValidate className={styles.form} onSubmit={this.onSubmit}>
               <div className={styles.line}>
                   <div className={styles.text}>
                         <p>Текущие данные</p>
                   </div>
                   <div className={styles.input}>
                        <p> Новые данные</p>
                   </div>
               </div>
               <div className={styles.line}>
                   <div className={styles.text}>
                            <label htmlFor="username">Имя : {userName}</label>
                   </div>
                   <div className={styles.input}>
                            <input 
                                type="text"
                                id="username"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                />
                   </div>
               </div>
               <div className={styles.line}>
                   <div className={styles.text}>
                         <label htmlFor="email">Email: {userEmail}</label>
                   </div>
                   <div className={styles.input}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            />
                   </div>
               </div>
               <div className={styles.line}>
                   <div className={styles.text}>
                          <label htmlFor="password">Пароль: </label>
                   </div>
                   <div className={styles.input}>
                         <input
                            id="password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            />
                   </div>
               </div>
                <div>
                <button   
                    type="submit"
                    >Отправить</button>
            </div>
            </form>
               
                   
            </div>
        )
    }
}
const mapStateToProps =(state)=>({
    auth:state.auth
})


export default connect(mapStateToProps,{ updateUser})(YourSettings)

