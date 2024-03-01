import React from 'react'
import './TodoCss.css'
export default function TodoList({todos,settodos}) {

//  const deletehandler=(todo)=>{
   // settodos(todos.filter((el)=>el.id!==todo.id));
     //console.log(todo)
   //alert("delete");
//  };


let completedhandler=(todo)=>{

                            settodos(todos.map(item=>
                                    {
                                        if(item.id===todo.id)
                                        {
                                        return {...item,completed:!item.completed};
                                        }
                                     
                                      return item ; 
                                      }
                            ))}

  
  return (<>
    <div className='"todo-container'>  
        <ul className='todo-list'>
          {
            todos.map((todo,ind)=>
          { 
            return<div>
              
              <li style={{ textDecoration: todo.completed ? 'line-through' : '' }}> {todo.text}  
             {/* <li className='todo-item'>{todo.text}  {todo.id}*/}
              <button className='complete-btn' onClick={()=>{completedhandler(todo)}}>Completed
              <i className='fas-fa-check'></i>
              </button>
              {/*<button className='trash-btn' onClick={()=>deletehandler({todo})}>Delete<i className='fas-fa-check'></i>*/}
              <button className='trash-btn' onClick={()=>settodos(todos.filter((el)=>el.id!==todo.id))}>Delete<i className='fas-fa-check'></i>
              </button>
              </li>
              </div>
        })}        
        </ul>
      </div>
    </>
  )
}
