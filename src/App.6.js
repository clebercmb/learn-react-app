import React from "react"
import Joke from "./components/Joke"
import jokesData from "./components/jokesData"

function App() {

    const jokesComponents = jokesData.map( joke => <Joke key={joke.id} data={joke} /> )

    return (
        <div>
            {jokesComponents}
        </div>
    )
}


export default App