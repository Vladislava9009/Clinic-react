import React from 'react';
import { Component } from 'react';

import styles from './ModalWindow.module.css';

class ModalWindow extends Component{
    constructor(){
        super();
        this.state={
            open:true
        }
    }

    onClick(e){
        e.preventDefault()
        this.setState({
            open:false
        })
        
    }
   render(){
    return(
        <div className={this.state.open ? '' : `${styles.hide}`}>
            <div className={styles.modalOverlay} >
                        <div className={styles.modalWindow}>
                            <div className={styles.modalHeader}>
                                <a href="" title="Закрыть" className={styles.close} onClick={this.onClick.bind(this)}>X</a>
                            </div>
                            <div className={styles.modalBody}>
                                <h2>Уважаемый(-ая),  {this.props.user}</h2>
                                <p>{this.props.error}</p>
                               
                            </div>
                           
                        </div>
            </div>
        </div>
        
    )
   }
} 

export default ModalWindow