import React, {Component} from 'react';
import FillCalendar from './FillCalendar.js';
import Previsualisation from './Preview';
import ImportMedia from './ImportMedia';
import './LandingPage.css';
import './CustomizingPage.css';
import Snow from 'react-snow-effect';
import Button from 'muicss/lib/react/button';
import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";


class CustomizingPage extends Component {

    render () {
      return (
        <div className='customizing-page'>
          <Snow/>
              <div className='import-media'>
                <ImportMedia />
                </div>
              <div className='fill-calendar'>
                <FillCalendar />
              </div>
            <div>
            <Link to="/preview">
              <Button className='button'>Preview my calendar</Button>
            </Link>
            </div>
            <div>
            <Link to="/preview">
              <Button className='button'>Confirm and Share</Button>
            </Link>
            </div>
        </div>
      );
    }
  }

export default CustomizingPage;