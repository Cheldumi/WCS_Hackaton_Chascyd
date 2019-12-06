import React, { Component } from 'react';
import axios from "axios";
import Calendar from './Calendar';

import SingleGift from './SingleGift'

class CalendarsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            calendars : []
        }
    }
    fetchCalendar = () => {
        axios
            .get('http://localhost:5000/api/calendars')
            .then(res => {
                this.setState({
                   movies: res.data
                })
            })
    }
    componentDidMount() {
        this.fetchCalendar();
    }
    render() {
        const { calendars } = this.state;
        return (
            <>
            <SingleGift/>
            <ul>
                {calendars.map((calendar, index) => (
                    <Calendar {...calendar} key={index}/>
                ))
                }
            </ul>
            </>
        )
    }
}
export default CalendarsList;