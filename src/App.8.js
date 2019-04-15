import React from "react"
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData"


function App() {
    const todosComponents = todosData.map(item => <TodoItem key={item.id} todoItem={item}/>)

    return(
        <div className="list">
            {todosComponents}  
        </div>
    )
}

export default App