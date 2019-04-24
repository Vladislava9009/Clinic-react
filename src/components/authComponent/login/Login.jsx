import React, {Component} from 'react';
import styles from './Login.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/authAction';

import ModalWindow from '../../ModalWindowComponent/ModalWindow'

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
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthentificated){
            this.props.history.push('/dashbord')
        }
    }

    onSubmit(e){
        e.preventDefault()

        const user={
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(user,this.props.history)
    }

    render(){
        return (
            <form className={styles.transparent} onSubmit={this.onSubmit}>
            { this.props.error.userFailed ? <ModalWindow user='пользователь' error={this.props.error.error}/> : null }
                <div className={styles.formInner}>
                    <h3>Авторизация</h3>
                    <label htmlFor="username">Email</label>
                    <input 
                        type="text"
                        id="username"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                    <label htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}></input>
                    <Link to="/auth/registration">Зарегестрироваться</Link>
                    <input type="submit" value="Отправить"></input>
                </div>
            </form> 
        )
    }
}

const mapStateToProps=(state)=>({
    auth:state.auth,
    error:state.error
})


 export default connect(mapStateToProps,{loginUser})(Login);