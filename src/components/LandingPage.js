import React, {Component} from 'react';
import './LandingPage.css';
import Button from 'muicss/lib/react/button';
import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import Snow from 'react-snow-effect';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
        <div className="landingPage">
            <Snow />
            <Link to="/calendar">
            <Button className='button'>Create my advent calendar</Button>
            </Link>
        </div> 
        );
    }
}
 
export default LandingPage;