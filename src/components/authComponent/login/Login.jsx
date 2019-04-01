import React from 'react';
import styles from './Login.module.css'

const Login=()=>{
    return (
        <form className={styles.transparent}>
            <div className={styles.formInner}>
                <h3>Авторизация</h3>
                <label for="username">Email</label>
                <input type="text" id="username"></input>
                <label for="password">Пароль</label>
                <input id="password" type="password"></input>
                <a href="#">Зарегестрироваться</a>
                <input type="submit" value="Отправить"></input>
            </div>
        </form> 
    )
}
 export default Login;