import React, {Component} from 'react';
import styles from './Registration.module.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/authAction'

const emailRegex= RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

class Registration extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            formErrors:{
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

        const { name,value}=e.target;
        let formErrors=this.state.formErrors;
        

        switch (name){
            case 'name':
                formErrors.name=value.length < 3 ? "допускается минимум 3 символа" :'';
            break;
            case 'email':
                formErrors.email=emailRegex.test(value)? '' :"введите корректный email";
            break;
            case 'password':
                formErrors.password=value.length<5 ? "пароль должен включать не менее 5 символов" :'';
            break;
            default:
            break
        }
        
        this.setState({formErrors,[name]:value})
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
        const {formErrors}=this.state
        return (
            <form noValidate className={styles.transparent} onSubmit={this.onSubmit}>
                ` <div className={styles.formInner}>
                        <h3>Регистрация</h3>
                        <label htmlFor="username">Имя пользователя</label>
                        <input 
                            className={formErrors.name.length>0 ? `${styles.error}` : ''}
                            type="text"
                            id="username"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                            {formErrors.name.length>0 &&(
                                <span className={styles.errorMessage}>{formErrors.name}</span>
                            )}
                        <label htmlFor="email">Email</label>
                        <input 
                            className={formErrors.email.length>0 ? `${styles.error}` : ''}
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            />
                            {formErrors.email.length>0 &&(
                                <span className={styles.errorMessage}>{formErrors.email}</span>
                            )}
                        <label htmlFor="password">Пароль</label>
                        <input
                            className={formErrors.password.length>0 ? `${styles.error}` : ''}
                            id="password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            />
                            {formErrors.password.length>0 &&(
                                <span className={styles.errorMessage}>{formErrors.password}</span>
                            )}
                          
                        <Link to="/auth/login">Уже есть аккаунт</Link>
                        <button  
                            disabled={true}  
                            type="submit"
                            disabled={formErrors.name.length ||
                                    formErrors.email.length ||
                                    formErrors.password.length>0 ? true : false}
                            >Отправить</button>
                    </div>
            </form> 
        )
    }

}

const mapStateToProps =(state)=>({
    auth:state.auth
})

export default connect(mapStateToProps,{registerUser})(withRouter(Registration))
