import React from "react"
import "./OptionsRow.scss"
import Transition from "./Transition"


const OptionsRow = ({text, on, callback}) => {
    return(
        <div className="OptionsRow__wrapper" onClick={callback}>
            <div className="OptionsRow">
                <div className="OptionsRow__text">
                    {text}
                </div>
                <div className="OptionsRow__state">
                    {on ?
                        <div className="OptionsRow__on">
                            ON
                        </div> :
                        <div className="OptionsRow__off">
                            OFF
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}



export default OptionsRow