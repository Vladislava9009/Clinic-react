import React, {Component} from 'react';
import styles from './Registration.module.css'
import {Link} from 'react-router-dom';
import axios from 'axios'

class Registration extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            errors:{}
        }

        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const newUser={
            fullName: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('https://localHost:3000/auth/register', newUser)
                .then(res=> console.log(res.data))
                   
        
    }

    render(){
        return (
            <form className={styles.transparent} onSubmit={this.onSubmit}>
                ` <div className={styles.formInner}>
                        <h3>Регистрация</h3>
                        <label for="username">Имя пользователя</label>
                        <input 
                            type="text"
                            id="username"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                        <label for="email">Email</label>
                        <input 
                            type="text"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            />
                        <label for="password">Пароль</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            />
                        <Link to="/">Уже есть аккаунт</Link>
                        <input type="submit" value="Отправить"></input>
                    </div>
            </form> 
        )
    }

}



export default Registration
