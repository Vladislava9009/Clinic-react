import axios from 'axios';
import {SET_USERS_APPOINTMENTS} from './types'
import {SET_CURRENT_USER, SET_ERROR, REMOVE_ERROR} from './types'


export const addAppointmetn =(date,id,dateForAppointment)=>dispatch=>{
    if(new Date(date)<new Date()){
      dispatch({
        type:SET_ERROR,
        payload:'Дата для записи не может быть меньше текущей'
        })
      }else{
        axios
            .get('https://localHost:3000/book/get')
            .then(res=>{
              let result=res.data.map(({title})=>title)
              let res2=result.every(elem=>{
                return (new Date(elem)-new Date(date)!==0)
              })
              if(res2===true){
                axios
                    .post('https://localHost:3000/book',dateForAppointment)
                    .then(res=>{
                      dispatch({
                        type:SET_ERROR,
                        payload:'Запись на прием успешно добавлена'
                        })
                    });
                axios
                    .get(`https://localhost:3000/auth/profile/`+id )
                    .then(res=>{const appoint=res.data.appointment
                                const appoint2= appoint.push(new Date(date))
                                axios
                                    .put(`https://localhost:3000/auth/profile/`+id,{appointment:appoint} )
                                    .then(res=>dispatch({
                                      type:SET_USERS_APPOINTMENTS,
                                      payload:res.data.appointment
                                  }))
                                  
                                }    
                        )
              }else{dispatch({
                type:SET_ERROR,
                payload:'К сожалению текущая дата и время заняты, попробуйт записаться на час позже'
                })
              }
            })
      }
}

export const getCurrentUser=(id)=>dispatch=>{
    axios
        .get(`https://localhost:3000/auth/profile/`+id )
        .then(res=>{console.log(res.data) }
                    )}


export const getAppoimments=(id)=>dispatch=>{
  axios
        .get(`https://localhost:3000/auth/profile/`+id)
      .then(res=>{
        dispatch({
            type:SET_USERS_APPOINTMENTS,
            payload:res.data.appointment
        })}
                    )
  
}
export const updateUser=(newUserData,id)=>dispatch=>{
  axios
      .put(`https://localhost:3000/auth/profile/`+id,newUserData )
      .then(res=>{
        const user= res.data;
        // localStorage.clear()
         localStorage.setItem( 'user',JSON.stringify(user));
         dispatch({
          type:SET_CURRENT_USER,
          payload:res.data
      })
     })
}

export const removeError=()=>dispatch=>{
  dispatch({
    type:REMOVE_ERROR,
})
}