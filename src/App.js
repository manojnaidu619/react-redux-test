import React, {useState} from 'react'
import './App.css'

const App = (props) => {

 const [state, newstate] = useState({
   name: "Manoj"
 })

 const ClickHandler = () => {
   newstate({
     ...state,
     name: "Arun"
   })
 }

  return (
    <div className="App">
      <p>{state.name}</p>
      <button onClick={ClickHandler}>Click here!</button>
    </div>
  )
}

export default App
