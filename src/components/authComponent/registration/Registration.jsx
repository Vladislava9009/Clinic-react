import React, {Component} from 'react';
import styles from './Registration.module.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/authAction'
class Registration extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            errors:{
                name:'',
                email:'',
                password:''
            }
        }

        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})

        // const { name,value}=e.target;
        // let formErrors=this.state.errors;
        

        // switch (name){
        //     case 'name':
        //     formErrors.name=value.length<3
        //     ? "минимум 3 символа" :'';
        // }

    }

    onSubmit(e){
        e.preventDefault()

        const newUser={
            fullName: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        this.props.registerUser(newUser, this.props.history)
                   
        
    }

    render(){
        return (
            <form className={styles.transparent} onSubmit={this.onSubmit}>
                ` <div className={styles.formInner}>
                        <h3>Регистрация</h3>
                        <label htmlFor="username">Имя пользователя</label>
                        <input 
                            type="text"
                            id="username"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            id="email"
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
                            onChange={this.onChange}
                            />
                        <Link to="/auth/login">Уже есть аккаунт</Link>
                        <input type="submit" value="Отправить"></input>
                    </div>
            </form> 
        )
    }

}

const mapStateToProps =(state)=>({
    auth:state.auth
})

export default connect(mapStateToProps,{registerUser})(withRouter(Registration))
