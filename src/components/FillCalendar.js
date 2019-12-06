import React, { Component } from 'react';
import './FillCalendar.css';
import DateBox from './DateBox';
import axios from 'axios';
import Modal from "react-responsive-modal";

class FillCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case: this.buildDateBox(),
      media: [],
      open: false
    }
  }

  onOpenModal = () => {
    this.setState({open : true});
  };

  OnCloseModal = () => {
    this.setState({open: false});
  };


  buildDateBox = () => {
    let boxes =  [];
    for (let i = 1; i < 25; i++) {
      let date = new Date(Date.UTC(2019, 11, i))
      boxes[i] = {
        date: this.renderDate(date),
        isOpen: false,
        data: "https://cdn.iconscout.com/icon/premium/png-256-thumb/christmas-tree-1728338-1469705.png",/*"https://cdn.iconscout.com/icon/premium/png-256-thumb/christmas-tree-1728338-1469705.png"*/
        canBeOpened: this.checkDate(new Date, i)
      }
    }
    // console.log(boxes)
    return boxes
  }

  checkDate = (today, comparedDate) => {
    const options = {  day: 'numeric' };
    const today2 = today.toLocaleDateString('fr-FR', options);

    if(today2 <= comparedDate - 1) {
      return false;
    } else {
      return true;
    }
  }

  isClicked = (index) => {
    if(this.state.case[index].canBeOpened && !this.state.case[index].isOpen) {
      let newCase = this.state.case;
      newCase[index].isOpen = true;
      this.setState({
        case: newCase
      });
    }
    if(this.props.preview){
      console.log('POPUP');
      this.props.getPopup(this.state.case[index].data);
    }
  }

  renderDate = (date) => {
    let settings = { day: 'numeric' };
    let dateFormat = date.toLocaleDateString('fr-BE', settings)
    return dateFormat;
  }

  handleSubmitMedia = (indexMedia, index) => {
    let newCase = this.state.case;
      newCase[index].data = this.state.media[indexMedia].path;
      console.log(this.state.media[indexMedia].path);
      this.setState({
        case: newCase
      });
  }

  handleCalendar = () => {
    /*axios.post('http://localhost:5000/calendar', {
            method: 'POST',
            body: this.state.case
        })*/
    axios
      .post('http://localhost:5000/calendar', {
          method: 'POST',
          mode: 'no-cors',
          data: this.state.case
        })
      .then(res => {
        console.log("Res ?", res);
    })
  }

  fetchVideos = () => {
    axios
        .get('http://localhost:5000/media')
        .then(res => {
            console.log('Res ?', res.data)
            this.setState({
                media: res.data
            })
        })
  }

  componentDidMount(){
      this.fetchVideos();
  }

  //mediaChoice={this.handleSubmitMedia}

  render () {


    return (
      <div className="fillCalendarDiv">
        <h1>2 - Choose your date and <br />upload your media</h1>
        <div className="allBoxes">
          {this.state.case.map((contenu, index) => { 
            return (
              <DateBox handleClick={this.isClicked} 
                       case={contenu} 
                       index={index}
                       mediaChoice={this.handleSubmitMedia}
                       media={this.state.media}
                       preview={this.props.preview}
                       />
            )
          })}         
        </div>
      </div>
    );
  }
}

export default FillCalendar;