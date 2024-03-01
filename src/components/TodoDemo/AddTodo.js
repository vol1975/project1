import React from 'react'
import './TodoCss.css'
export default function AddTodo({intputText,setInputText,todos,settodos}) {
  const inputTextHandler=(e)=>{
    const value=e.target.value;
  setInputText(value);
    console.log(value);
  };
  const submithandler=(e)=>{
    e.preventDefault();
    settodos([...todos,{text:intputText,completed:false,id:Math.random()*1000 }])
    setInputText("");
  }
  
  
  
  
  return (
    <>
    <form>
        <div>
        <input type="text" value={intputText} onChange={inputTextHandler}></input>
        <button className="todo-button" type="submit" onClick={submithandler}> Add
            <i className='fas fa-plus-square'></i>
         </button>
       
            <select name="todos" className='filter-todo'>
                <option value="all">
                    All
                </option>
                <option value="completed">
                Completed
                </option>
                <option value="incompleted">
                Uncompleted
                

                </option>
            </select>




        </div>
    </form>
    
    
    
    
    
    
    </>
  )
}
