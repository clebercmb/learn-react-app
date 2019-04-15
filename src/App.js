import React, {Component} from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    changeLoggedStatus() {
        const isLoggedIn2 = this.state.isLoggedIn
        console.log('changeLoggedStatus='+isLoggedIn2)
    }

    render() {
        return (
            <div>
                <input type='checkbox' onClick={this.changeLoggedStatus}></input>
                <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
            </div>
        )
    }
}

export default App