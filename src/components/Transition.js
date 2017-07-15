import React from "react"
import TransitionGroup from "react-addons-css-transition-group"
import "./Transition.scss"
const defaultConfig = {
    transitionName: "chatlist",
    transitionEnterTimeout: 400,
    transitionLeaveTimeout: 300
}

const Transition = ({children, config=defaultConfig}) => {
    return(
        <TransitionGroup {...config}>
            {children}
        </TransitionGroup>
    )
}

export default Transition