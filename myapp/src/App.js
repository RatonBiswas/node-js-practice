import React, { Component } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "Raton morningstar",
  };

  usernameChangeHandler = (event) => {
      this.setState({ username: event.target.value})
    }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangeHandler} currentName={this.state.username}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='raton anna' />
      </div>
    );
  }
}

export default App;
