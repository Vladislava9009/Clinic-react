import React, {Component} from 'react';
import styles from './Login.module.css'
import { Link } from 'react-router-dom';

class Login extends Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            errors:{}
        }

        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
        console.log(this)
    }

    onSubmit(e){
        e.preventDefault()

        const user={
            email: this.state.email,
            password: this.state.password
        }

        console.log(user)
    }

    render(){
        return (
            <form className={styles.transparent} onSubmit={this.onSubmit}>
                <div className={styles.formInner}>
                    <h3>Авторизация</h3>
                    <label for="username">Email</label>
                    <input 
                        type="text"
                        id="username"
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
                        onChange={this.onChange}></input>
                    <Link to="/registration">Зарегестрироваться</Link>
                    <input type="submit" value="Отправить"></input>
                </div>
            </form> 
        )
    }
}


 export default Login;