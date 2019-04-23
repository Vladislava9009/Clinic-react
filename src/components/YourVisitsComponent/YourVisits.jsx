import React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import {getAppoimments} from '../../actions/userAction'

import styles from './YourVisits.module.css';
import VisitItem from './YourVisitItem'



class YourVisits extends Component{
    componentDidMount(){
        const id=JSON.parse(localStorage.getItem('user'))._id
        this.props.getAppoimments(id);
    }

    render(){
        const {appointents}=this.props.appointents;
        // console.log(appointents)
        let appointmentItem;

        if(appointents===null|| appointents.length===0){
          appointmentItem=  <p>Записей пока нет</p>
        }else{
        appointmentItem=  appointents.map(appointent=>(
            <VisitItem key={appointent.index} appointent={appointent}/>
        ))
        }
        return(
            <div className={styles.online}>
                 
                    <h4>Предстоящие записи</h4>
                    
                    <ul>
                    {appointmentItem}
                    </ul>
                   
            </div>
        )
    }
}
const mapStateToProps=state=>({
    appointents: state.appointents
})


export default connect(mapStateToProps,{getAppoimments})(YourVisits)

