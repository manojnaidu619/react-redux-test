import React, {useState} from 'react'
import '../App.css'
import List from '../List/List'
import App1 from './App1'
import WithClass from '../hoc/WithClass'
import PropTypes from 'prop-types'

const App = (props) => {

 const [state, newstate] = useState({
   name: "Manoj",
   fruits: ['banana', 'apple', 'orange', 'kiwi', 'Cherry']
 })

 const ClickHandler = () => {
   newstate((prevState, props) => {
     return {
       ...state,
       name: "Arjun"
     }
   })
 };

 const arrOperationHandler = (index=0) => {
   const newFruits = [...(state.fruits)]
   newFruits.splice(index, 1)
   newstate((prevState, props) => {
     return {
       ...state,
       fruits: newFruits
     }
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

App.propTypes = {
  name: PropTypes.string,
  fruits: PropTypes.array
}


export default App
