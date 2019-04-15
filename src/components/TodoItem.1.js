import React from "react"
import { parse } from "url";
import { stringify } from "querystring";


function TodoItem() {
    return (
        <div className="todo-item">
            <input  type="checkbox" />
            <p>Placeholder text here</p>
        </div>

    )
}

export default TodoItem