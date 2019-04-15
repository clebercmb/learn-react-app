import React from "react"
import Joke from "./components/Joke"
import jokesData from "./components/jokesData"

function App() {
    return (
        <div>
            <Joke 
                data={
                    {
                        punchLine: "It´s hard to explain puns to kleptomaniacs because they always take things literally"
                    }
                }
            />

            <Joke 
                data={
                    {
                        question: "Are we funny?", 
                        punchLine: "Well, we are the punch line"
                    }
                }
            />
            <Joke 
                data={
                    {
                        question: null, 
                        punchLine: "It´s hard to explain puns to kleptomaniacs because they always take things literally"
                    }
                }
            />
            <Joke 
                data={
                    {
                        question: "Are we funny?", 
                        punchLine: "Well, we are the punch line"
                    }
                }
            />
            <Joke 
                data={
                    {
                        question: "Are we funny?", 
                        punchLine: "Well, we are the punch line"
                    }
                }
            />

        </div>
    )
}


export default App