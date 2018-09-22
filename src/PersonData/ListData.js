import React, { Component } from 'react';
import PersonData from './PersonData';

class ListData extends Component {
  state = {
    Persons: [
      { name: 'max O', age: 22 },
      { name: 'max A', age: 24 },
      { name: 'max B', age: 26 },
      { name: 'max C', age: 28 }
    ],
    otherState: 'some other value'
  }
  switchNameHandler = (newName) => {
    this.setState({
      Persons: [
        { name: newName, age: 32 },
        { name: 'max 10 A', age: 44 },
        { name: 'max 10 B', age: 56 },
        { name: 'max 10 C', age: 68 }
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      Persons: [
        { name: 'Hello', age: 32 },
        { name: 'max 10 A', age: 44 },
        { name: event.target.value, age: 56 },
        { name: 'max 10 C', age: 68 }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: '#F00'
    }
    return (
      <section>
        <h3>React Examples</h3>
        <button type="button" style={style} className="btn btn-primary" onClick={() => this.switchNameHandler('Hello Nagarjuna..!!')}>Swith Name</button>
        <PersonData name={this.state.Persons[0].name} age={this.state.Persons[0].age} />
        <PersonData name={this.state.Persons[1].name} age={this.state.Persons[1].age} />
        <PersonData changed={this.nameChangedHandler} name={this.state.Persons[2].name} age={this.state.Persons[2].age} />
        <PersonData name={this.state.Persons[3].name}
          age={this.state.Persons[3].age}
          click={this.switchNameHandler.bind(this, 'Nagarjuna Tamarada')}
        >My Hobbies: Racing</PersonData>
      </section>
    );
  }
}

export default ListData;
