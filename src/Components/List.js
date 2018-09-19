import React, { Component } from 'react';
import './List.css';
import Person from '../Person/Person';

class List extends Component {
  state = {
    Persons: [
      { name: 'max O', age: 22 },
      { name: 'max A', age: 24 },
      { name: 'max B', age: 26 },
      { name: 'max C', age: 28 }
    ],
    otherState: 'some other value'
  }
  switchNameHandler = () => {
    this.setState({
      Persons: [
        { name: 'max 10 O', age: 32 },
        { name: 'max 10 A', age: 44 },
        { name: 'max 10 B', age: 56 },
        { name: 'max 10 C', age: 68 }
      ]
    })
  }
  render() {
    return (
      <section>
        <h3>React Examples</h3>
        <button type="button" className="btn btn-primary" onClick={this.switchNameHandler}>Swith Name</button>
        <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age} />
        <Person name="some B" age="24" />
        <Person name="some C" age="26" />
        <Person name="some D" age="28" >My Hobbies: Racing</Person>
      </section>
    );
  }
}

export default List;
