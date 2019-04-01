import React from 'react';
import styles from './Registration.module.css'

const Registration=()=>{
    return (
        <form className={styles.transparent}>
            ` <div className={styles.formInner}>
                    <h3>Регистрация</h3>
                    <label for="username">Имя пользователя</label>
                    <input type="text" id="username"></input>
                    <label for="email">Email</label>
                    <input type="text" id="email"></input>
                    <label for="password">Пароль</label>
                    <input id="password" type="password"></input>
                    <a href="#">Уже есть аккаунт</a>
                    <input type="submit" value="Отправить"></input>
                </div>
        </form> 
    )
}

export default Registration
