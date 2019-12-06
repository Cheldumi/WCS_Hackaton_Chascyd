import React from 'react';
import './DateBox.css';
import Modal from "react-responsive-modal";
import {Link} from 'react-router-dom'

// const whichDate = () => {
//     // alert("This box is locked, please be patient")
//     console.log("Locked box")
// }

// const Openable = () => {
//     console.log("Closed Box")
// }

//{props.case.canBeOpened ? (event) => whichDate(event, props.date) : () => console.log("Openable box")}



const DateBox = (props) => {

    console.log(props.case)

   return (
       <Link to={{pathname: '/single'}} >
            <div
                className= {`${props.case.isOpen ? "opened" : ""} ${props.case.canBeOpened && !props.case.isOpen ? "openable" : "locked"}`} 

                onClick={() => props.handleClick(props.index)}>
                <img src={props.case.data} alt="uploaded data"/>
                <p className='date'>{props.case.date}</p>
                {props.case.isOpen}
                {props.case.canBeOpened}
            </div>
    </Link>
   ) 
}

export default DateBox;