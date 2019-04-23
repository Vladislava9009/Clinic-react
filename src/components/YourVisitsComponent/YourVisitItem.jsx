import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class VisitItem extends Component{
    render(){
        // const { appointent }=this.props;
        const date=new Date(this.props.appointent)
        date.toLocaleString("ru")
        return(
            <li> <FontAwesomeIcon icon="notes-medical" />   {date.toLocaleString("ru")}</li>
        )
    }
}

export default VisitItem