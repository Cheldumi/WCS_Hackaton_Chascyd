import React, {Component} from 'react';
import FillCalendar from './FillCalendar.js';
import Previsualisation from './Previsualisation';
import ImportMedia from './ImportMedia';
import './CustomizingPage.css';

class CustomizingPage extends Component {

    render () {
      return (
        <div className="mainDiv">
            <ImportMedia />
            <FillCalendar />
            <Previsualisation />
        </div>
      );
    }
  }

export default CustomizingPage;