import React, { Component } from 'react';
import './App.css';
import Activity from "./components/Activity"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
      this.setState({showDetails: !this.state.showDetails})
  }

  render() {
    return (
      <div className="App">
        <div className="App__metrics">
            <div>Chats</div>
            <li className="App__options-row" onClick={this.toggle}>
                <div className="App_option-text">tere</div>
                <div className="App__option-status">{this.state.showDetails ? "ON" : "OFF"}</div>
            </li>
        </div>
        <div className="App__activity">
            {sampleAgents.map(agent => <Activity agent={agent} showDetails={this.state.showDetails}/>)}
        </div>
      </div>
    );
  }
}

export default App;

let sampleAgents = [
    {
        name: "Veljo Lasn",
        status: "away",
        chats: [
            {
                name: "Custy 1",
                duration: "10:00:00"
            },
            {
                name: "Custay 2",
                duration: "05:00:00"
            },
            {
                name: "Customeur",
                duration: "10:00:00"
            },
            {
                name: "Peeter Põder",
                duration: "05:00:00"
            },
        ]
    },
    {
        name: "Not Veljo",
        status: "active",
        chats: [
            {
                name: "Custy 3",
                duration: "10:00:00"
            },
            {
                name: "Custay 4",
                duration: "05:00:00"
            }
        ]
    },
    {
        name: "Mario Tasane",
        status: "invisible",
        chats: [
            {
                name: "Customeur 5",
                duration: "10:00:00"
            }
        ]
    },
    {
        name: "Veljo Lasn",
        status: "away",
        chats: [
            {
                name: "Custy 1",
                duration: "10:00:00"
            },
            {
                name: "Custay 2",
                duration: "05:00:00"
            },
            {
                name: "Customeur",
                duration: "10:00:00"
            },
            {
                name: "Peeter Põder",
                duration: "05:00:00"
            },
        ]
    },
    {
        name: "Not Veljo",
        status: "active",
        chats: [
            {
                name: "Custy 3",
                duration: "10:00:00"
            },
            {
                name: "Custay 4",
                duration: "05:00:00"
            }
        ]
    },
    {
        name: "Mario Tasane",
        status: "invisible",
        chats: [
            {
                name: "Customeur 5",
                duration: "10:00:00"
            }
        ]
    },

]