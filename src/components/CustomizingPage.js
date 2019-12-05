import React, {Component} from 'react';
import FillCalendar from './FillCalendar';
import Previsualisation from './Previsualisation';
import ImportMedia from './ImportMedia';

class CustomizingPage extends Component {

    render () {
      return (
        <div>
            <ImportMedia />
            <FillCalendar />
            <Previsualisation />
        </div>
      );
    }
  }

export default CustomizingPage;