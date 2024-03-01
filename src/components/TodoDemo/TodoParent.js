import React,{useState} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
export default function TodoParent() {
const [intputText,setInputText]=useState("");
const [todos,settodos]=useState([]);
  return (
    <div>TodoParent
         <AddTodo intputText={intputText} setInputText={setInputText} todos={todos} settodos={settodos} />
         <TodoList todos={todos} settodos={settodos} />
         </div>
  )
}
