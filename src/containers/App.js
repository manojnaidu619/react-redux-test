import React, {useState, useEffect} from 'react'
import '../App.css'
import List from '../List/List'
import App1 from './App1'
import WithClass from '../hoc/WithClass'

const App = (props) => {

  useEffect(() => {
    console.log("USeeffect")
  })

 const [state, newstate] = useState({
   name: "Manoj",
   fruits: ['banana', 'apple', 'orange', 'kiwi', 'Cherry']
 })

 const ClickHandler = () => {
   newstate({
     ...state,
     name: "Arjun"
   })
 };

 const arrOperationHandler = (index=0) => {
   const newFruits = [...(state.fruits)]
   newFruits.splice(index, 1)
   newstate({
     ...state,
     fruits: newFruits
   })
 };

  return (
    <WithClass class="App">
      <p>{state.name}</p>
      <button onClick={ClickHandler}>Click here!</button>
      <List fruits={state.fruits} clicked={arrOperationHandler}/>
      <hr/>
      <App1/>
    </WithClass>
  )
}


export default App
