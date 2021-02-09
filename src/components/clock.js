
import React from 'react';
import ReactDOM from 'react-dom';


export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getTime();
      }

      getTime(){
        const currentTime = new Date();
        return {
          hours: currentTime.getHours(),
          minutes: currentTime.getMinutes(),
          seconds: currentTime.getSeconds(),
          ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        }
      }
      componentDidMount() {
        this.setTimer();
      }

      setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
      }

      updateClock() {
        this.setState(this.getTime, this.setTimer);
      }

    render() {
      const { hours, minutes, seconds, ampm } = this.state;
        return (
        <div className="clock">
          { hours == 0 ? 12 : (hours > 12) ? hours - 12 : hours}
          :{ minutes > 9 ? minutes : `0${minutes}`}
          :{ seconds > 9 ? seconds : `0${seconds}`} 
          {ampm}
        </div>
      );
    }
  }

  export default Clock;

  
  
//   const Hour    = (props) => {
//     let {hours} = props;
//     if (hours === 0) { hours = 12; }
//     if (props.twelveHours) { hours -= 12; }
//     return (<span>{hours}</span>)
//   }
//   const Minute  = ({minutes}) => (<span>{minutes<10 && '0'}{minutes}</span>)
//   const Second  = ({seconds}) => (<span>{seconds<10 && '0'}{seconds}</span>)
//   const Separator = ({separator}) => (<span>{separator || ':'}</span>)
//   const Ampm = ({hours}) => (<span>{hours >= 12 ? 'pm' : 'am'}</span>)
