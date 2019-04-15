import React from "react"

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.data.question && "none"}}>Question: {props.data.question} </h3> 
            <h3 style={{color: !props.data.question && "#888888"}}>Answer: {props.data.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke