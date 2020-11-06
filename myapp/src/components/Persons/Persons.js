// Functional Components for presentation of the content & class components fro state management

import React from 'react'

import Person from './Person/Person'

const persons = (props) =>props.persons.map((person,index) =>{
    // Each child in a list should have a unique "key" prop 
    return <Person 
    click={() => props.clicked( index )}
    name={person.name} 
    age={person.age} 
    key={person.id} 
    changed={ (event) => props.changed( event,person.id )}/>
  })

export default persons