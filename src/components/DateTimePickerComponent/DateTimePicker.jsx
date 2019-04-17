import PickyDateTime from 'react-picky-date-time';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { addAppointmetn } from '../../actions/userAction.js'

import styles from './DateTimePicker.module.css';


class DateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPickyDateTime: true,
      date: '30',
      month: '04',
      year: '2019',
      hour: '10',
      minute: '00',
      second: '00',
      meridiem: 'PM'
    };
    this.onSubmit=this.onSubmit.bind(this)
  }

  onYearPicked(res) {
    const { year } = res;
    this.setState({ year: year});
  }

  onMonthPicked(res) {
    const { month, year } = res;
    this.setState({ year: year, month: month});
  }

  onDatePicked(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onResetDate(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onResetDefaultDate(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onSecondChange(res) {
    this.setState({ second: res.value });
  }

  onMinuteChange(res) {
    this.setState({ minute: res.value });
  }

  onHourChange(res) {
    this.setState({ hour: res.value });
  }

  onMeridiemChange(res) {
    this.setState({ meridiem: res });
  }

  onResetTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onResetDefaultTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onClearTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onSubmit(e){
    e.preventDefault()

    function getCurrentTime(meridiem,hour) {
      if ( meridiem==='PM'){
        return hour=+hour+12
      }else{
        return hour
      }
    }
    const hour= getCurrentTime(this.state.meridiem,this.state.hour) 
     
    const date=this.state.year+"-"+
                          this.state.month+"-"+
                          this.state.date +"T"+
                          hour+":"+
                          this.state.minute+":"+
                          this.state.second
    const dateForAppointment={
      title:new Date(date)
    }
    const appointments={
      appointment:dateForAppointment
    }

    const id=JSON.parse(localStorage.getItem('user')).user._id
    
    this.props.addAppointmetn(date,id,dateForAppointment,appointments)

    

    
   
  }
  
  render() {
    const {
      showPickyDateTime,
    } = this.state;

    return(
      <div className={styles.online}>
        <h4>Записывайтесь на прием онлайн!</h4>
        <PickyDateTime
            size="xs"
            mode={1}
            show={showPickyDateTime}
            locale="en-us"
            onYearPicked={res => this.onYearPicked(res)}
            onMonthPicked={res => this.onMonthPicked(res)}
            onDatePicked={res => this.onDatePicked(res)}
            onResetDate={res => this.onResetDate(res)}
            onResetDefaultDate={res => this.onResetDefaultDate(res)}
            onSecondChange={res => this.onSecondChange(res)}
            onMinuteChange={res => this.onMinuteChange(res)}
            onHourChange={res => this.onHourChange(res)}
            onMeridiemChange={res => this.onMeridiemChange(res)}
            onResetTime={res => this.onResetTime(res)}
            onResetDefaultTime={res => this.onResetDefaultTime(res)}
            onClearTime={res => this.onClearTime(res)}
          />
          <form className={styles.form} onSubmit={this.onSubmit}>
                      <input 
                        value={this.state.date+"/"+
                        this.state.month+"/"+
                        this.state.year +"  "+
                        this.state.hour+":"+
                        this.state.minute+":"+
                        this.state.second+"  "+
                        this.state.meridiem}
                        />
                      <button
                         className={styles.done}
                         type="submit"
                            >done</button>
                  </form>
                </div>
                
    );
  }
}
const mapStateToProps =(state)=>({
  user:state.user
})
export default connect(mapStateToProps,{addAppointmetn})(DateTimePicker)