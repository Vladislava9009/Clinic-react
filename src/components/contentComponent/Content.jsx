import React, { Component } from 'react';

import YourVisits from '../YourVisitsComponent/YourVisits'

import styles from './Content.module.css';



class Content extends Component{
   
    render(){
        const userName=JSON.parse(localStorage.getItem('user')).user.fullName
        return(
            <div>
              <h4>Здравствуйте,{userName} !</h4>
              <p>В личном кабинете Вы можете записаться на прем, просмотреть предстоящие записи </p>
              <div className={styles.reception}>
                   <YourVisits/>
                    <div className={styles.map}>
                    <h4>Предстоящие записи</h4>
                    </div>
                    <div className={styles.datePicker}>
                    <h4>Предстоящие записи</h4>
                    </div>
              </div>
    
            </div>
        )
    }
}

export default Content