import React, { Component } from 'react';
import './List.css';
import Person from '../Person/Person';
import Radium from 'radium';
import PersonsList from './Persons';

class ListOld extends Component {
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
    //const Person = Object.assign({}, this.state.Persons[personIndex]);
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
    //const Persons=this.state.Persons;
    //const Persons=this.state.Persons.slice();
    const Persons = [...this.state.Persons];
    Persons.splice(personIndex, 1);
    this.setState({ Persons: Persons });
  }
  render() {
    const style = {
      backgroundColor: '#F00',
      // ':hover': {
      //   backgroundColor: '#000'
      // }
    }
    let Persons = null;
    if (this.state.showPersons) {
      Persons = (
        <div>
          {this.state.Persons.map((Persons, index) => {
            return <Person name={Persons.name} age={Persons.age}
              click={() => this.deletePersonHandler(index)}
              key={Persons.id}
              changed={(event) => this.nameChangedHandler(event, Persons.id)}
            />
          })}
        </div>
      );
      style.backgroundColor = '#000';
      style[':hover'] = {
        backgroundColor: 'green'
      }
    }
   // let classes = ['text-danger', 'font-weight-bold'].join(' ');
    let classes = [];
    if (this.state.Persons.length <= 2) {
      classes.push('text-danger');
    }
    if (this.state.Persons.length <= 1) {
      classes.push('font-weight-bold');
    }
    return (
      <section>
        <h3>React Examples</h3>
        <p className={classes.join(' ')}>sample code please click to below button</p>
        <button type="button" style={style} 
        className="btn btn-primary"
         onClick={this.togglePersonsHandler}>Swith Name</button>
       
        {Persons}

        {/*{
          this.state.showPersons === true ?
            <div>
              <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age} />
              <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age} />
              <Person changed={this.nameChangedHandler} name={this.state.Persons[2].name} age={this.state.Persons[2].age} />
              <Person name={this.state.Persons[3].name}
                age={this.state.Persons[3].age}
                click={this.switchNameHandler.bind(this, 'Nagarjuna Tamarada')}
              >My Hobbies: Racing</Person>
            </div> : null 
            <p>No Data Found..</p>
        }*/}
      </section>
    );
  }
}

export default ListOld;

/*
export default Radium(List);
npm install --save radium
*/