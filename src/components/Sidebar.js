import React from "react"
import "./Sidebar.scss"
import Transition from "./Transition"

const sidebarTransition = {
    transitionName: "metrics",
    transitionEnterTimeout: 400,
    transitionLeaveTimeout: 300
}

const Sidebar = ({open, children, toggle}) => {
    return(
        <div
            className={`Sidebar${open ? " open" : ""}`}
        >
        <div className="Sidebar__header" onClick={toggle}>Metrics</div>
            <Transition config={sidebarTransition}>
                {open && children}
            </Transition>
        </div>
        )
}


export default Sidebar