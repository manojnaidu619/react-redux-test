import React, {useState} from 'react'
import './App.css'
import List from './List/List'

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

 const arrOperationHandler = (index=0) => {
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
      <List fruits={state.fruits} clicked={arrOperationHandler}/>
    </div>
  )
}

export default App
