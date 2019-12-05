import React, {Component} from 'react';
import './App.css';
import CustomizingPage from './components/CustomizingPage'

class App extends Component {

  render () {
    return (
      <div>
        <h1>Advent Calendar</h1>
        <CustomizingPage />
      </div>
    );
  }
}

export default App;
