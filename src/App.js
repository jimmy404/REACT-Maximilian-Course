import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Jimmy', age: 30},
      { name: 'Nahuel', age: 32},
      { name: 'Geronimo', age: 29}
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = () => {
    //console.log('Was clocked!')
    this.setState({
      persons: [
      { name: 'James', age: 30},
      { name: 'Nahuel', age: 32},
      { name: 'Geronimo', age: 30}
      ]
    } )
  }


  render() {
    return (
      <div className="App">
            <h1>Hi im React App</h1>
          <button onClick={this.switchNameHandler}>Swich name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
