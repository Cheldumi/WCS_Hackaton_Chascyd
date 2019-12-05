import React, { Component } from 'react';

const DateBox = (props) => 
<div className="oneBox">
    <img className="data" src={props.case.data}/>
    <p>{props.case.date}</p>
    {props.case.isOpen}
</div>

export default DateBox;