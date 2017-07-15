import React, {Component} from "react"
import "./ChatRow.scss"

export default class ChatRow extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="ChatRow">
                <div className="ChatRow__name">
                    {this.props.name}
                </div>
                <div className="ChatRow__duration">
                    {this.props.duration}
                </div>
            </div>
        )
    }
}