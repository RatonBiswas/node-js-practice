const validation = (props) => {
    return (
    <div>
        {
            props.inputLength > 5 ?
                <p>This text too large enough</p> :

                
                <p>This text too much short</p>
        }
    </div>)
}

export default validation