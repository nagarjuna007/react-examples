import React, { Component } from 'react';
import './List.css';
import Radium from 'radium';
import PersonsList from './Persons';
import Cockpit from './Cockpit';

class List extends Component {
  state = {
    Persons: [
      { id: '1', name: 'max O', age: 22 },
      { id: '2', name: 'max A', age: 24 },
      { id: '3', name: 'max B', age: 26 },
      { id: '4', name: 'max C', age: 28 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  switchNameHandler = (newName) => {
    this.setState({
      Persons: [
        { id: '1', name: newName, age: 32 },
        { id: '2', name: 'max 10 A', age: 44 },
        { id: '3', name: 'max 10 B', age: 56 },
        { id: '4', name: 'max 10 C', age: 68 }
      ]
    })
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.Persons.findIndex(p => {
      return p.id === id;
    });
    const Person = {
      ...this.state.Persons[personIndex]
    };
    Person.name = event.target.value;
    const Persons = [...this.state.Persons];
    Persons[personIndex] = Person;
    this.setState({ Persons: Persons });
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  deletePersonHandler = (personIndex) => {
    const Persons = [...this.state.Persons];
    Persons.splice(personIndex, 1);
    this.setState({ Persons: Persons });
  }
  render() {

    let Persons = null;
    if (this.state.showPersons) {
      Persons = <PersonsList
        Persons={this.state.Persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
    }

    return (
      <section>
       
        <Cockpit
          showPersons={this.state.showPersons}
          Persons={this.state.Persons}
          clicked={this.togglePersonsHandler} />
        <div>{Persons}</div>
      </section>
    );
  }
}

export default List;