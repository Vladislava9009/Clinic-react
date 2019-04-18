import React, { Component } from 'react';

import clinic1 from "../../images/clinic.jpg"
import clinic2 from "../../images/doctor.jpg"
import clinic3 from "../../images/clinic3.JPG"

import YourVisits from '../YourVisitsComponent/YourVisits'
import DateTimePicker from '../DateTimePickerComponent/DateTimePicker'
import YourSettings from '../YourSettingsComponent/YourSettings'

import styles from './Content.module.css';



class Content extends Component{
   
    render(){
        const userName=JSON.parse(localStorage.getItem('user')).user.fullName
        return(
            <div className={styles.text}>
              <h4>Здравствуйте,{userName} !</h4>
              <p>В личном кабинете Вы можете записаться на прем и просмотреть предстоящие записи </p>
              <div className={styles.reception}>
				<div className={styles.paragraf}>
					<img src={clinic1} alt="clinic"/>
				</div>
				<div className={styles.paragraf2}>
                      <DateTimePicker/>
				</div>
				<div className={styles.paragraf}>
                         <YourVisits/>
				</div>
				<div className={styles.paragraf2}>
                         <img src={clinic2} alt="clinic"/>
				</div>
				<div className={styles.paragraf}>
						<img src={clinic3} alt="clinic"/>
				</div>
				<div className={styles.paragraf2}>
						<YourSettings/>
				</div>
			</div>    
            </div>
        )
    }
}

export default Content