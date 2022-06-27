import React from "react"
import "../styles/die.css"

function Die (props) {
    return(
        <div className="dice-box">
        <h2 className="dice-num">{props.value}</h2>
        </div>
    )
}
export default Die