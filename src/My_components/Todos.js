import React from 'react';
import {Item} from "./Item";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length===0? "No any Todos remain in the list.":
        props.todos.map((todo) => {
          return <Item todo={todo} key={todo.sno} OnDelete={props.OnDelete}/>
        })
      }
      </div>
  )
}

export default Todos
