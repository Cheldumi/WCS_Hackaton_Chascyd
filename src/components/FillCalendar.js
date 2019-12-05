import React, { Component } from 'react';
import './FillCalendar.css';
import DateBox from './DateBox';

class FillCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case: this.buildDateBox()
    }
  }
  buildDateBox = () => {
    let boxes =  [];
    for (let i = 1; i < 25; i++) {
      let date = new Date(Date.UTC(2019, 11, i))
      boxes[i] = {
        date: this.renderDate(date),
        isOpen: false,
        data: "https://cdn.iconscout.com/icon/premium/png-256-thumb/christmas-tree-1728338-1469705.png"
      }
    }
    return boxes
  }

  renderDate = (date) => {
    let settings = { weekday: 'long', day: 'numeric' };
    let dateFormat = date.toLocaleDateString('fr-BE', settings)
    return dateFormat
  }

  render () {
    return (
      <div className="fillCalendarDiv">
        <h1>Fill Calendar</h1>
        <div className="allBoxes">
          {this.state.case.map((x) => { 
            return (
              <DateBox case={x}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default FillCalendar;