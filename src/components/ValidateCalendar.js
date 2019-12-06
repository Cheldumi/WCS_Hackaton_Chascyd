import React, { Component } from 'react';
import './ValidateCalendar.css';
import FillCalendar from './FillCalendar';
import Button from 'muicss/lib/react/button';
import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";

class ValidateCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
        img: '',
        popup: false
    }
    this.preview = true;
  }

  getPopup = (imgSrc) => {
    this.setState({
        img: imgSrc,
        popup: true
    });
  }

  closeClick = () => {
      this.setState({
          popup: false
      })
  }

  render() {
    return (
        <div className="my-calendar">

            <div className="no-preview">
                <h1>3- Preview my calendar</h1>

                <FillCalendar preview={true} getPopup={this.getPopup} />
            
                <div className="popup"
                     style={{
                         visibility: this.state.popup ? 'visible' : 'hidden'
                     }}
                    >
                    <button className="close-popup" onClick={this.closeClick} >CLOSE</button>
                    <img src={this.state.img} />
                    
                </div>
            </div>

            <Link to="/calendar">
                <Button className='button'> Back to my work</Button>
            </Link>
        </div>
    )
  }
}

export default ValidateCalendar;