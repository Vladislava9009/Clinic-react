import React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './YourVisits.module.css';



class YourVisits extends Component{
   

    render(){
        return(
            <div className={styles.online}>
                <FontAwesomeIcon icon="phone" />
                    <h4>Предстоящие записи</h4>
                    <ul>
                        <li>Запись</li>
                        <li>Запись</li>
                        <li>Запись</li>
                    </ul>
                   
            </div>
        )
    }
}



export default YourVisits