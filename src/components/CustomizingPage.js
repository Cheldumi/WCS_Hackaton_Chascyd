import React, {Component} from 'react';
import FillCalendar from './FillCalendar.js';
import Previsualisation from './Previsualisation';
import ImportMedia from './ImportMedia';
import './LandingPage.css';
import './CustomizingPage.css';
import Snow from 'react-snow-effect';
import CalendarsList from './CalendarsList';
import CalendarForm from './CalendarForm';


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
          <div className='previsualisation'>
            <Previsualisation />
          </div>
        </div>
      );
    }
  }

export default CustomizingPage;