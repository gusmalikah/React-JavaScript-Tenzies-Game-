import React from "react"
import "../styles/die.css"

function Die (props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "White"
    }
    return(
        <div onClick={props.holdDice} className="dice-box" style={styles}>
        <h2 className="dice-num">{props.value}</h2>
        </div>
    )
}
export default Die