import React, {Component} from 'react';
import './App.css';
import CustomizingPage from './components/CustomizingPage';
import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import LandingPage from './components/LandingPage';

class App extends Component {

  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route
            exact path="/"
            component={LandingPage}
            />
            <Route
            path="/calendar"
            component={CustomizingPage}
            />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
