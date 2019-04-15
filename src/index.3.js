import React from "react"
import ReactDom from "react-dom"

function MyApp() {
    return (
        <ul>
            <li>USA</li>
            <li>Canada</li>
            <li>Brazil</li>
        </ul>
    )
}

ReactDom.render(
    <MyApp/>,
    document.getElementById("root")
)