import React from 'react'

const WithClass = (props) => (
  <div className={props.class}>{props.children}</div>
)

export default WithClass
 
