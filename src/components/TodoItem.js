import React from "react"
import { parse } from "url";
import { stringify } from "querystring";


function TodoItem(props) {
    return (
        <div className="item">
            <input  type="checkbox" checked = {props.todoItem.completed} />
            <p>{props.todoItem.text} - {props.todoItem.completed.toString()}</p>
            <hr/>
        </div>

    )
}

export default TodoItem