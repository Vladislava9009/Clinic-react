import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import {getAppoimments} from '../../actions/userAction'






class YourSettings extends Component{
    componentDidMount(){
        // const id=JSON.parse(localStorage.getItem('user')).user._id
        // this.props.getAppoimments(id);
    }

    render(){
        
        return(
            <div className='k'>
               <h4>Персональные настройки</h4>
               <form noValidate >
               <div>
                        <label htmlFor="username">Имя : Стас </label>
                        <input 
                            type="text"
                            id="username"
                            name="name"
                            
                            onChange={this.onChange}
                            />
               </div>
               <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            
                            onChange={this.onChange}
                            />
               </div>
               <div>
                        <label htmlFor="password">Пароль</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            
                            onChange={this.onChange}
                            />
               </div>
                ` <div>
                      
                        
                        <button  
                            disabled={true}  
                            type="submit"
                            >Отправить</button>
                    </div>
            </form>
               
                   
            </div>
        )
    }
}
const mapStateToProps=state=>({
    appointents: state.appointents
})


export default connect(mapStateToProps,{getAppoimments})(YourSettings)