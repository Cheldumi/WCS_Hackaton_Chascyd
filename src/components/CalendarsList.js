import React, { Component } from 'react';
import Calendar from './Calendar';

class CalendarsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        const { calendars } = this.state;
        return (
            <div>
               
                <Calendar />
               
            </div>
        )
    }
}
export default CalendarsList;