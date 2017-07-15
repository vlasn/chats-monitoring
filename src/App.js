import React, { Component } from 'react';
import './App.scss';
import Activity from "./components/Activity"
import OptionsRow from "./components/OptionsRow"
import Sidebar from "./components/Sidebar"
import Stat from "./components/Stat"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false,
      sidebarOpen: true
    }
    this.toggleDetails = this.toggleDetails.bind(this)
    this.toggleSidebar = this.toggleSidebar.bind(this)

  }
  toggleDetails() {
      this.setState({
          ...this.state,
          showDetails: !this.state.showDetails
      })
  }
  toggleSidebar() {
      this.setState({
          ...this.state,
          sidebarOpen: !this.state.sidebarOpen
      })
  }

  render() {
    return (
      <div className="App">
          <Sidebar toggle={this.toggleSidebar} open={this.state.sidebarOpen}>
              <Stat name="Total chats" number={totalChatCount(sampleAgents)}/>
              <Stat name="Chats per agent" number={totalChatsPerAgent(sampleAgents)}/>
              <Stat name="Chat trolls" number={5}/>
              <Stat name="Puppies" number={3}/>
              <Stat name="Chat trolls fed to puppies" number={14}/>

              <OptionsRow text="Chat details" on={this.state.showDetails} callback={this.toggleDetails}/>
          </Sidebar>
        <div className="App__activity">
            {sampleAgents.map(agent => <Activity
                agent={agent}
                showDetails={this.state.showDetails}
            />)}
        </div>
      </div>
    );
  }
}

export default App;

let sampleAgents = [
    {
        name: "Robert Douglas",
        status: "away",
        chats: [
            {
                name: "Client One",
                duration: "10:00:00"
            },
            {
                name: "Helpful Feedback Guy",
                duration: "05:00:00"
            },
            {
                name: "admin",
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
                name: "ToothbrushesRUs",
                duration: "10:00:00"
            },
            {
                name: "Loyal Paying Customer",
                duration: "05:00:00"
            }
        ]
    },
    {
        name: "Billing Specialist",
        status: "invisible",
        chats: [
            {
                name: "Roland V.",
                duration: "10:00:00"
            }
        ]
    },
    {
        name: "Marvin Fielder",
        status: "away",
        chats: [
            {
                name: "Odis Severt",
                duration: "10:00:00"
            },
            {
                name: "CoolStuffCo",
                duration: "05:00:00"
            },
            {
                name: "anonymous",
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
                name: "Tere Maailm",
                duration: "10:00:00"
            },
            {
                name: "Valmar",
                duration: "05:00:00"
            }
        ]
    },
    {
        name: "Charles Pinetree",
        status: "invisible",
        chats: [
            {
                name: "Unimaginitive Name",
                duration: "10:00:00"
            }
        ]
    },

]

//To be refactored to selectors:
let totalChatCount = (agents) => agents.reduce((acc,val)=>acc+val.chats.length,0)
let totalChatsPerAgent = (agents) => Math.round((totalChatCount(agents)/agents.length)*100)/100