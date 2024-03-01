import React from 'react'
import { useState } from 'react';
export default function EmployeeEdit({selectedEmp,saveEditedEmp}) {
    
    const [emp, setEmp] = useState(selectedEmp);
    
    const handler=(e)=>{
    const{name,value}=e.target;
    setEmp({...emp,[name]:value})

  }
  
  
  
  
  return <>
    <h1>EditEmployee</h1>
    
    
    <p>Employee id <input name='eId' value={emp.eId} onChange={(e)=>handler(e)}/> </p>
    <p> Employee Name <input name='name' value={emp.name} onChange={(e)=>handler(e)} /> </p>
    <p> Employee Sal <input name='sal'value={emp.sal} onChange={(e)=>handler(e)}/> </p>
      
      <div>  <button  onClick={()=>saveEditedEmp(emp)}> Save</button>
        <button> Clear</button>
    </div>
  </>
}
