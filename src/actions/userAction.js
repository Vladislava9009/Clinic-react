import axios from 'axios';
// import {SET_CURRENT_USER} from './types'

export const addAppointmetn =(date,id,dateForAppointment,appointments)=>dispatch=>{
    if(new Date(date)<new Date()){
        alert('Дата для записи не может быть меньше текущей')
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
                        alert('Запись на прием успешно добавлена')
                    });
                axios
                  .put(`https://localhost:3000/auth/profile/`+id,appointments )
                  .then(res=>console.log(res.data))
              }else{
                alert('К сожалению текущая дата и время заняты, попробуйт записаться на час позже')
              }
            })
      }
}

export const listOfAppointments=()=>{}