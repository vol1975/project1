import React ,{useState} from 'react';

export default function AddEmployee({addemployee}) {
    const initialEmp = { eId: '', name: '', sal: 0 }
    const [emp, setEmp] = useState(initialEmp);
    const handler=(e)=>{
    const{name,value}=e.target;
    setEmp({...emp,[name]:value})

  }
  const addNewEmp=(emp)=>{
    addemployee(emp);
    setEmp(initialEmp);
  }
  
  
  
  return <>
    <h1>AddEmployee</h1>
    
    
    <p>Employee id <input name='eId' value={emp.eId} onChange={(e)=>handler(e)}/> </p>
    <p> Employee Name <input name='name' value={emp.name} onChange={(e)=>handler(e)} /> </p>
    <p> Employee Sal <input name='sal'value={emp.sal} onChange={(e)=>handler(e)}/> </p>
      
      <div>  <button  onClick={()=>addNewEmp(emp)}> Save</button>
        <button> Clear</button>
    </div>
  </>
}
