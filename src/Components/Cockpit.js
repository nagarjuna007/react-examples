import React, { Component } from 'react';

const Cockpit = (props) => {
    let classes = [];
    const style = {
        backgroundColor: '#F00'
    }
    if (props.showPersons) {
        style.backgroundColor = '#000';
        style[':hover'] = {
            backgroundColor: 'green'
        }
    }
    if (props.Persons.length <= 2) {
        classes.push('text-danger');
    }
    if (props.Persons.length <= 1) {
        classes.push('font-weight-bold');
    }
    return (
        <div>
            <h3>React Examples</h3>
            <p className={classes.join(' ')}>sample code please click to below button</p>
            <button type="button" style={style}
                className="btn btn-primary"
                onClick={props.clicked}>Swith Name</button>
        </div>
    )
}

export default Cockpit;