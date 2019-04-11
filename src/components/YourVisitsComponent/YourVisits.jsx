import React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





class YourVisits extends Component{
   

    render(){
        return(
            <div>
                <FontAwesomeIcon icon=" fas fa-notes-medical" />
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