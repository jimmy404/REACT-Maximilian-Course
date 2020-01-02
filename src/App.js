import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Jimmy', age: 30},
      { name: 'Nahuel', age: 32},
      { name: 'Geronimo', age: 29}
    ],
    otherState: 'Some other value'
  });

  const switchNameHandler = () => {
    //console.log('Was clocked!')
    setPersonsState({
      persons: [
      { name: 'James', age: 30},
      { name: 'Nahuel', age: 32},
      { name: 'Geronimo', age: 30}
      ]
    });
  };

    return (
      <div className="App">
            <h1>Hi im React App</h1>
          <button onClick={switchNameHandler}>Swich name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
}

export default app;
