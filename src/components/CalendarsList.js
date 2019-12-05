import React, { Component } from 'react';
import axios from "axios";
import Calendar from './Calendar';

class CalendarsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            calendars : []
        }
    }
    fetchVideos = () => {
        axios
            .get('http://localhost:5000/calendars')
            .then(res => {
                this.setState({
                   calendars: res.data
                })
            })
    }
    componentDidMount() {
        this.fetchVideos();
    }
    render() {
        const { calendars } = this.state;
        return (
            <ul>
                {calendars.map((calendar, index) => (
                    <Calendar {...calendar} key={index}/>
                ))
                }
            </ul>
        )
    }
}
export default CalendarsList;