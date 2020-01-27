import React, {useState} from 'react'
import './App.css'

const App = (props) => {

 const [state, newstate] = useState({
   name: "Manoj",
   fruits: ['banana', 'apple', 'orange', 'kiwi', 'Cherry']
 })

 const ClickHandler = () => {
   newstate({
     ...state,
     name: "Arun"
   })
 }

 const arrOperationHandler = (index) => {
   const newFruits = [...(state.fruits)]
   newFruits.splice(index, 1)
   newstate({
     ...state,
     fruits: newFruits
   })
 }

  return (
    <div className="App">
      <p>{state.name}</p>
      <button onClick={ClickHandler}>Click here!</button>
      <hr/>
      {state.fruits.map((fruit, index) => {return <h1 onClick={() => arrOperationHandler(index)}>{fruit}</h1>})}
    </div>
  )
}

export default App
