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
        data: ""/*"https://cdn.iconscout.com/icon/premium/png-256-thumb/christmas-tree-1728338-1469705.png"*/,
        canBeOpened: this.checkDate(new Date, i)
      }
    }
    // console.log(boxes)
    return boxes
  }

  checkDate = (today, comparedDate) => {
    const options = {  day: 'numeric' };
    const today2 = today.toLocaleDateString('fr-FR', options);

    if(today2 <= comparedDate - 1) {
      return false;
    } else {
      return true
    }
  }

  isClicked = (index) => {
    console.log("I am clicked")
    if(this.state.case[index].canBeOpened && !this.state.case[index].isOpen) {
      let newCase = this.state.case;
      console.log("Je suis newCase", newCase)
      newCase[index].isOpen = true;
      this.setState({
        case: newCase
      });
    }
  }

  renderDate = (date) => {
    let settings = { weekday: 'long', day: 'numeric' };
    let dateFormat = date.toLocaleDateString('fr-BE', settings)
    return dateFormat;
  }

  render () {
    return (
      <div className="fillCalendarDiv">
        <h1>Fill Calendar</h1>
        <div className="allBoxes">
          {this.state.case.map((contenu, index) => { 
            return (
              <DateBox handleClick={this.isClicked} case={contenu} index={index}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default FillCalendar;