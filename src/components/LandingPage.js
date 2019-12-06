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
            <div className="bloc-hp">
            <Snow />
            <h1>Advent Calendar</h1>
            <p>Millions of calendar. No credit card required.</p>
            <Link to="/calendar">
            <Button className='button'>Create my calendar</Button>
            </Link>
            </div>
        </div> 
        );
    }
}
 
export default LandingPage;