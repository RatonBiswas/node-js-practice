import React, { useState } from "react";
import "./App.css";

// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";
import Person from "./Person/Person";

const App=(props)=> {
  // useState are return two parameter one initial and sencd is set value
  const [personsState,setPersonsState] = useState({
    persons: [
      { name: "raton", age: 21 },
      { name: "Nana", age: 22 },
      { name: "Sibli", age: 23 },
    ],
    otherStates: 'some other state',
    showPersons: false,
  });
  
  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 21 },
        { name: "Nana", age: 22 },
        { name: "Sibli", age: 2 },
      ],
      
    });
  };

  const nameChangedHandler =(event) => {
    setPersonsState({
      persons: [
        { name: 'RATON', age: 21 },
        { name: event.target.value, age: 22 },
        { name: "Sibli", age: 2 },
      ],
    });
  }
  const taggleNameHandler = ()=> {
    const doesShow = personsState.showPersons;
    // if doesShow was false , it will set showPersons to true .
    setPersonsState({ showPersons: !doesShow });
  }
  const style = {
    backgroundColor:'white',
    font : 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
    return (
      <div className="App">
        {/* <UserInput changed={this.usernameChangeHandler} currentName={this.state.username}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='raton anna' /> */}
        <h1>Hi, I'm react App.</h1>
        <p>How was the day!</p>
        <button style={style} onClick={taggleNameHandler}>Switch Name</button>
        { 
          personsState.showPersons === true ?
            <div>
              <Person 
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
              />
              <Person click={switchNameHandler.bind(this,'Lucifer')}
                changed={nameChangedHandler}
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
              >
                My Hobbies: Racing
              </Person>
              <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
              />
            </div> : null}
      </div>
    );
  }

export default App;

