import React from 'react';
import './DateBox.css';


let myDate = new Date;
let settings = { /*weekday: 'long',*/ day: 'numeric' };
let todaysDate = myDate.toLocaleDateString('fr-BE', settings);
console.log(todaysDate);

const openBox = () => {
    // alert("This box is locked, please be patient")
    console.log("locked box")
}

const DateBox = (props) => {
   return (
    <div className={props.case.canBeOpened && !props.case.isOpen ? "locked" : "openable"} onClick={props.case.canBeOpened ? (event) => openBox(event, props.date) : () => console.log("Openable box")}>
        <img src={props.case.data} alt="uploaded data"/>
        <p>{props.case.date}</p>
        {props.case.isOpen}
        {props.case.canBeOpened}
    </div>
   ) 
}

export default DateBox;