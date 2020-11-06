import React from "react"

const userInput = (props)=>{
    const inputStyle = {
        border: '3px solid black',
        width: '10%',
        padding: '16px',
        margin: '16px',
        textAlign: 'center'

    }
    return <input type="text" onChange={props.changed} style={inputStyle} value={props.currentName}/>
}

export default userInput