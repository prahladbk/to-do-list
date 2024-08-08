import React, { useState } from 'react'
import TodoInput from './ListInput.component';
import TodoList from './TodoList.component';

const TodoContainer = () => {
    const [todoList,setTodoList]=useState([]);
    const todos =(todo)=>{
        setTodoList(...todoList,{id:Date.now(),label:todo,completed:false,isDelete:false})
    }
    console.log("to do list--",todoList);
    
  return (
    <div className='Main-wrapper'>
        <TodoInput todos={todos}/>
        <TodoList todos={todoList}/>
    </div>
  )
}

export default TodoContainer;