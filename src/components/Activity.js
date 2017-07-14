import React, {Component} from "react"
import "./Activity.css"
import ChatRow from "./ChatRow"

class Activity extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {

    }
    render() {
        return (
            <div className={"Activity__wrapper "+this.props.agent.status}>
                <div className="Activity__header-wrapper">
                    <div className="Activity__card-left">
                        <div className="Activity__initials">
                            {this.props.agent.name.split(" ").map(w => w.substring(0,1))}
                        </div>
                    </div>
                    <div className="Activity__card-right">
                        <div className="Activity__info">
                            <div className="Activity__info-row">
                                {this.props.agent.name}
                            </div>
                            <div className="Activity__info-row">
                                {this.props.agent.status}
                            </div>
                        </div>
                        <div className="Activity__info">
                            <div className="Activity__chat-count">
                                <div className="Activity__initials">
                                    {this.props.agent.chats.length}/2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.showDetails && <div className="Activity__chat-list-wrapper">
                    <ChatRow name="Name:" duration="Duration:"/>
                    {this.props.agent.chats.map(chat => <ChatRow name={chat.name} duration={chat.duration}/>)}
                </div>}

            </div>
        )
    }
}

export default Activity