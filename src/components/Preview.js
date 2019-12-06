import React, {Component} from 'react';
import './Preview.css';
import Button from 'muicss/lib/react/button';
import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import FillCalendar from './FillCalendar';
import Snow from 'react-snow-effect';


class Preview extends Component {

    render () {
      return (
        <div className="preview">
          <Snow />
            {/* <h1>3- Preview my calendar</h1> */}
            <div className="no-preview">
              <FillCalendar />
            </div>
            <Link to="/calendar">
                {/* <Button className='button'> Back to my work</Button> */}
            </Link>
        </div>

      );
    }
  }

export default Preview;