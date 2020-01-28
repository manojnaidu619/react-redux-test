import React, {Component} from 'react'

class App1 extends Component{

  componentDidMount(){
    console.log("from App1 componentDidMount")
  }

  render(){
    console.log("From App1 Render")
    return(
      <h2>From App1</h2>
    )
  }
}

export default App1
