import React from 'react'

const List = (props) => {
  return(
    <div>
      {props.fruits.map((fruit, index) => {return <h1 key={index} onClick={() => props.clicked(index)}>{fruit}</h1>})}
    </div>
  )
}

export default List
