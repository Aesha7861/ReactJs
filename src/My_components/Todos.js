import React from 'react';
import {Item} from "./Item";

const Todos = (props) => {
  return (
    <div className="container">
      <h3>Todos List</h3>
      
      <Item todo={props.todos[0]}/>
    </div>
  )
}

export default Todos
