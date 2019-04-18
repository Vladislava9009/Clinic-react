import React, { Component} from 'react';


class VisitItem extends Component{
    render(){
        // const { appointent }=this.props;
        const date=new Date(this.props.appointent)
        date.toLocaleString("ru")
        return(
            <li>{date.toLocaleString("ru")}</li>
        )
    }
}

export default VisitItem