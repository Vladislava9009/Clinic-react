import axios from 'axios';
import {SET_CURRENT_USER} from './types'

export const registerUser =(userData, history)=>dispatch=>{
    axios
        .post('https://localHost:3000/auth/register', userData)
        .then(res=> history.push('/login'))
        .catch(err=>console.log(err))
}

export const loginUser=(userData)=>dispatch=>{
    axios
        .post('https://localHost:3000/auth/login',userData)
        .then(res=>{console.log(res.data)
            const user= res.data;
            localStorage.setItem( 'user',JSON.stringify(user));
            
        })
        .catch(err=>console.log(err))
}

export const setCurrentUser=(user)=>{
    return {
        type:SET_CURRENT_USER,
        payload:user
    }
}