import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
            <h1>Hi im React App</h1>
        <Person name="Jimmy" age="30" />
        <Person name="Nahuel" age="32">My hobbies: Racing</Person>
        <Person name="Geronimo" age="29" />
      </div>
    );
  }
}

export default App;
