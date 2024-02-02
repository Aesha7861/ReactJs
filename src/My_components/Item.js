import React from 'react'

const Item = ({todo}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
    </div>
  )
}

export default Item
