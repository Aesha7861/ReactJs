import React from 'react'

export const Item = ({todo, OnDelete}) => {
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger'  onClick={()=> {OnDelete(todo)}}>Delete</button>
    </div>
    <hr/>
    </>
  )
}
