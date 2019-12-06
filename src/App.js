import React, {Component} from 'react';
import './App.css';
import CustomizingPage from './components/CustomizingPage';
import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Preview from './components/Preview';
import AdventCalendar from './components/AdventCalendar';
import ValidateCalendar from './components/ValidateCalendar';
import SingleGift from './components/SingleGift';
import Snow from 'react-snow-effect';
// import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  // constructor() {
  //   this.state = {
  //     single: {
  //     }
  //   }


   

  render () {
    return (
      <Router>
        <div className='app'>
          <Snow />
          <Switch>
            <Route
            exact path="/"
            component={LandingPage}
            />
            <Route
            path="/calendar"
            component={CustomizingPage}
            />
            <Route
            path="/preview"
            component={ValidateCalendar}
            />
            <Route
            path="/my_calendar"
            component={ValidateCalendar}
            />
    
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
