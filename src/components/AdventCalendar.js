import React, {Component} from 'react';
import './Preview.css';
import './AdventCalendar.css';
import FillCalendar from './FillCalendar';
import Snow from 'react-snow-effect';


class AdventCalendar extends Component {

    render () {
      return (
        <div className="preview">
          <Snow />
            <h1>The Advent Calendar</h1>
            <div className="advent-calendar">
              <FillCalendar />
            </div>
        </div>

      );
    }
  }

export default AdventCalendar;