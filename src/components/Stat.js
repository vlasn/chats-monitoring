/**
 * Created by clstrfvck on 15/07/2017.
 */
import React from "react"
import "./Stat.scss"

const Stat = ({name, number}) => {
    console.log(name,number);
  return(
      <div className="Stat__wrapper">
          <div className="Stat">
              <div className="Stat__name">
                  {name}
              </div>
              <div className="Stat__number-wrapper">
              <span className="Stat__number">
                  {number}
              </span>
              </div>
          </div>
      </div>
  )
}


export default Stat