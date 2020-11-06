import React from "react";
// import Radium from "radium"
// import './Person.css'
import styled from 'styled-components'


// mixed css and js in third party app using styled- components whenever we use styled components we found all html attribute in the styled methods.
const StyleDiv = styled.div`
  width: 50%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: "450px";
  }
`;
const person = (props) => {
  return (
    <StyleDiv>
      <p onClick={props.click}>
        My name is {props.name} and i'm {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>
  );
};

// export default Radium(person);
export default person;
