import React, {Component} from "react"
import "./Activity.scss"
import ChatRow from "./ChatRow"
import Transition from "./Transition"

class Activity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: props.showDetails
        }
        this.toggleDetails = this.toggleDetails.bind(this)
    }
    componentWillReceiveProps(newProps) {
        newProps.showDetails !== this.state.expanded &&
            this.toggleDetails()
    }
    toggleDetails() {
        this.setState({
            expanded: !this.state.expanded
        })
    }
    render() {
        return (
            <div className={"Activity__wrapper "+this.props.agent.status}>
                <div className="Activity__header-wrapper" onClick={this.toggleDetails}>
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
                <Transition>
                    {this.state.expanded &&
                        <div className="Activity__chat-list-wrapper">
                            {
                                [{name: "Name:",duration: "Duration:"}, ...this.props.agent.chats]
                                    .map(chat => <ChatRow name={chat.name} duration={chat.duration}/>)
                            }
                        </div>}
                </Transition>

            </div>
        )
    }
}

export default Activity