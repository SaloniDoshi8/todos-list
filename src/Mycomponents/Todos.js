import React from 'react'
import TodoItem from '../Mycomponents/TodoItem';

const Todos = (props) => {
  let myStyle = {
    minHight: "1000vh",
  }
  return (
    <div className="container my-3 px-5" style={myStyle}>
      <hr />
      <h3 className="my-4 text-decoration-underline fw-bold">Todos List</h3>
      {props.todos.length===0? <div className='alert alert-danger' role='alert'>No Todos to Display</div>:
      props.todos.map((todo)=>{
        return (
          <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
          </>
        )
      })
      }

    </div>
  )
}

export default Todos 