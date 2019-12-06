import React, { Component } from 'react';
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




class DateBox extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectOptionMedia: ''//this.props.media[0].file_name
        }
    }

      handleChange = (event) => {
        this.setState({selectOptionMedia: event.target.value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.props.mediaChoice(this.state.selectOptionMedia, this.props.index);
      }

    //onSubmit={props.mediaChoice}

    render(){
        return (
            <div
                className= {`${this.props.case.isOpen ? "opened" : ""} ${this.props.case.canBeOpened && !this.props.case.isOpen ? "openable" : "locked"}`} 
                // className="opened openable"
                onClick={() => this.props.handleClick(this.props.index)}
            >
                <img src={this.props.case.data} alt="uploaded data"/>
                <p>{this.props.case.date}</p>
                {this.props.case.isOpen}
                {this.props.case.canBeOpened}
                
                <form onSubmit={this.handleSubmit} >
                    <select name='media' value={this.state.selectOptionMedia} onChange={this.handleChange} >
                        {this.props.media.map((contenu, index) => { 
                            return(
                            <option value={index}>{contenu.file_name}</option>
                            )
                        })}
                    </select>
                    <input type="submit" value="ok" />
                </form>
            </div>
           );
    }
   
}

export default DateBox;