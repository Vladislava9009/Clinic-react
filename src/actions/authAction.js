import axios from 'axios';
import {SET_CURRENT_USER, SET_ERROR} from './types'

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
            }else{
                dispatch({
                type:SET_ERROR,
                payload:'Данный адресс почты уже зарегестрирован'
            }) 
                }
        })
}

export const loginUser=(userData, history)=>dispatch=>{
    axios
        .post('https://localHost:3000/auth/login',userData)
        .then(res=>{
           const user= res.data;
            localStorage.setItem( 'user',JSON.stringify(user.user));
            history.push('/auth/dashbord')
            return user
        })

        .catch(err=>{
            switch (err.response.status){
                case 400:
                        dispatch({
                            type:SET_ERROR,
                            payload:'Данный email в системе не зарегестрирован'
                        })
                break;
                case 401: dispatch({
                    type:SET_ERROR,
                    payload:'Пароль введен не верно'
                })
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