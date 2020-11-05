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
import Radium from "radium"
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
      backgroundColor: "green",
      color : "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      // pseudo selector using Radium 
      ':hover' : {
        backgroundColor : "lightgreen",
        color : "black"
      }
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
      // when click button then change the button color
      style.backgroundColor = "red";
      // pseudo selector using Radium 
      style[':hover'] = {
        backgroundColor : "lightgrey",
        color : "black"
      }
    }

    // dynamic css class 
    // let classes = ['red','bold'].join(' ');
    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red') // Classes = ['red']
    }
    
    if(this.state.persons.length <=1){
      classes.push('bold') // Classes = ['red','bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm react App.</h1>
        <p className={classes.join(' ')}>How was the day!</p>
        <button style={style} onClick={this.taggleNameHandler}>
          Switch Name
        </button>
        {persons}  
      </div>
    );
  }
}

export default Radium(App);
// export default App;





// ** TasK session
// import React, { Component } from 'react';
// import Validation from './Validation/Validation'

// import Char from './Char/Char'
// class App extends Component {
//   state ={
//     userInput: '',
//   }

//   inputChangeHandler = (event)=>{
//     this.setState({ userInput: event.target.value})
//   }
//   deleteInputHandler = (index) =>{
//     const text = this.state.userInput.split('');
//     text.splice(index,1);
//     const updateText = text.join('');
//     this.setState({userInput: updateText})
//   }
//   render() {
//     const charlist = this.state.userInput.split('').map((ch,index)=>{
//       return <Char character={ch} key = {index} clicked={()=>this.deleteInputHandler(index)}/>
//     })
//     return (
//       <div>
//         <input type="text" onChange={this.inputChangeHandler } value={this.state.userInput}></input>
//         <p>{this.state.userInput}</p>
//         <Validation inputLength={this.state.userInput.length}/>
//         {charlist}
//       </div>
//     );
//   }
// }

// export default App; 