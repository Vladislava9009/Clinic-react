import axios from 'axios';
import {SET_CURRENT_USER} from './types'

export const registerUser =(userData, history)=>dispatch=>{
    axios
        .post('https://localHost:3000/auth/login',userData)
        .then(res=>null)
        .catch(err=>{
            if(err.response.status===400){
                axios
                .post('https://localHost:3000/auth/register', userData)
                .then(res=> history.push('/auth/login'))
                .catch(err=>console.log(err))
            }else{ alert('Данный адресс почты уже зарегестрирован')}
        })
}

export const loginUser=(userData, history)=>dispatch=>{
    axios
        .post('https://localHost:3000/auth/login',userData)
        .then(res=>{
           const user= res.data;
            localStorage.setItem( 'user',JSON.stringify(user));
            history.push('/auth/dashbord')
            return user
        })

        .catch(err=>{
            switch (err.response.status){
                case 400: alert('Пользователь не найден')
                break;
                case 401: alert(' Пароль введен не верно')
                break;
                default: break
            }
        })

        
}

export const setCurrentUser=(user)=>{
    return {
        type:SET_CURRENT_USER,
        payload:user
    }
}

export const logoutUser=(history)=>dispatch=>{
    localStorage.removeItem('user')
    window.location.href='auth/login'
}