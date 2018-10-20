import React, { Component } from 'react';
import Person from '../Person/Person';

const PersonsList = (props) => props.Persons.map((Persons, index) => {
    return <Person name={Persons.name} age={Persons.age}
        click={() => props.clicked(index)}
        key={Persons.id}
        changed={(event) => props.changed(event, Persons.id)}
    />
})

export default PersonsList;