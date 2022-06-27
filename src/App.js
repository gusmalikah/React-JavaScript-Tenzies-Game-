import React from "react"
import "./app.css"
import Die from "../src/Components/Die.js"

function App() {
  const [dice, setDice] = React.useState(allNewDice())
  
  function allNewDice() {
    const newDice = []
    for(let i=0; i< 10;i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }
    const diceElemets = dice.map(die => <Die value={die} />)
   
    return(
        <main>
          <div className="dice-container">
          {diceElemets}
          </div>
        </main>
    )
}
export default App