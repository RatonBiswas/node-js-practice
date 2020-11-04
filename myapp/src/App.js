// import React, { useState } from "react";

// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";

// const App=(props)=> {
//   // useState are return two parameter one initial and sencd is set value
// const [personsState,setPersonsState] = useState({
//   persons: [
//     { name: "raton", age: 21 },
//     { name: "Nana", age: 22 },
//     { name: "Sibli", age: 23 },
//   ],
//   otherStates: 'some other state',
//   showPersons: false,
// });

// const switchNameHandler = (newName) => {
//   setPersonsState({
//     persons: [
//       { name: newName, age: 21 },
//       { name: "Nana", age: 22 },
//       { name: "Sibli", age: 2 },
//     ],

//   });
//   };

// const nameChangedHandler =(event) => {
  // setPersonsState({
  //   persons: [
  //     { name: 'RATON', age: 21 },
  //     { name: event.target.value, age: 22 },
  //     { name: "Sibli", age: 2 },
  //   ],
  // });
// }
// const taggleNameHandler = ()=> {
//   const doesShow = personsState.showPersons;
//   // if doesShow was false , it will set showPersons to true .
//   setPersonsState({ showPersons: !doesShow });
// }
// const style = {
//   backgroundColor:'white',
//   font : 'inherit',
//   border: '1px solid blue',
//   padding: '8px',
//   cursor: 'pointer'
// }
//     return (
//       <div className="App">
//         {/* <UserInput changed={this.usernameChangeHandler} currentName={this.state.username}/>
//         <UserOutput userName={this.state.username} />
//         <UserOutput userName={this.state.username} />
//         <UserOutput userName={this.state.username} />
//         <UserOutput userName='raton anna' /> */}
// <h1>Hi, I'm react App.</h1>
// <p>How was the day!</p>
// <button style={style} onClick={taggleNameHandler}>Switch Name</button>
//         {
//           personsState.showPersons === true ?
// <div>
//   <Person
//     name={personsState.persons[0].name}
//     age={personsState.persons[0].age}
//   />
//   <Person click={switchNameHandler.bind(this,'Lucifer')}
//     changed={nameChangedHandler}
//     name={personsState.persons[1].name}
//     age={personsState.persons[1].age}
//   >
//     My Hobbies: Racing
//   </Person>
//   <Person
//     name={personsState.persons[2].name}
//     age={personsState.persons[2].age}
//   />
//             </div> : null}
//       </div>
//     );
//   }

import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id:'a1', name: "raton", age: 21 },
      { id:'a2', name: "Nana", age: 22 },
      { id:'a3', name: "Sibli", age: 23 },
    ],
    otherStates: "some other state",
    showPersons: false,
  };
  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id ===id
    })
    const person ={
      // spread operator
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value; // updated person
    const persons = [...this.state.persons]; // spread operator to pass the value in jsx because persons in an object
    persons[personIndex] = person; // update personIndex from person 
    // alternative => without spread operator in the bellow
    // const person = Object.assign({},this.state.persons[personIndex])

    this.setState({persons: persons});
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: "Nana Morningstar", age: 22 },
        { name: "Sibli MorningStar", age: 2 },
      ],
    });
  };
  deleteHandler = (personIndex)=>{
    const persons = this.state.persons ;
    // remove element from array if necessary
    persons.splice(personIndex, 1) ;
    this.setState({persons:persons})
  }
  taggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    // if doesShow was false , it will set showPersons to true .
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
            // Each child in a list should have a unique "key" prop 
            return <Person key={person.id} name={person.name} age={person.age} 
            click={()=> this.deleteHandler(index)}
            changed={(event)=>this.nameChangedHandler(event,person.id)}/>
          })}
          
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm react App.</h1>
        <p>How was the day!</p>
        <button style={style} onClick={this.taggleNameHandler}>
          Switch Name
        </button>
        {persons}  
      </div>
    );
  }
}

export default App;
// export default App;
