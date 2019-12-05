import React, { Component, Fragment } from 'react';


class CalendarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: 0,
          content: ''
        }
      }
      handleChange = ( { target } ) => {
        this.setState({
          [target.name]: target.value
        })
        console.log(this.state);
      }
      handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost:5000/calendars', {
          method: 'POST',
          body: this.state,
        })
      }
  render(){
      return (
        <Fragment>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="number"/>
                <label htmlFor="content">Choose your media</label>
                <input id="content" name="content" type="file"/>
                <button>Save my calendar</button>
            </form>
        </Fragment>
  );
  }
}
export default CalendarForm;
