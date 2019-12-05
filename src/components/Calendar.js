import React from 'react';

const Calendar = ({date, content}) => (
    <div>
        <li>{date}</li>
        <li>{content}</li>
    </div>
)
export default Calendar;