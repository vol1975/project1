import React, { useState } from 'react'
import EmplyeeList from './EmplyeeList';
import AddEmployee from './AddEmployee';
import EmployeeEdit from './EmployeeEdit';


export default function EmployeeCrud() {
  const initialEmployees = [
    { eId: 101, name: "john", sal: 5000 },
    { eId: 104, name: "smith", sal: 8000 },
    { eId: 103, name: "alex", sal: 7000 },
    { eId: 102, name: "carl", sal: 9000 },
  ];
  const[isEdit,setIsEdit]=useState(false);
  const initialEmp = { eId: '', name: '', sal: 0 }
  const [selectedEmp,setselectrdEmp]=useState(initialEmp)
  const [employees, setEmployees] = useState(initialEmployees);
  
  const editemployee=(emp)=>{
    setselectrdEmp(emp)
    setIsEdit(true);

  }
  const saveEditedEmp=(editedemp)=>{
    // let remainingEmployees=employees.filter(emp=>emp.eId!==editedemp)
    // setEmployees([...remainingEmployees,editedemp]);
    // setIsEdit(false);
    let updatedEmp=employees.map(emp=>
        {
            if(emp.eId===editedemp.eId)
            return editedemp;
            else
            {
                return emp;
            }

        })
        
        setEmployees([...updatedEmp]);
        setIsEdit(false);
    
  }

  
  const addemployee=(emp)=>{
    employees.push(emp)
    setEmployees([...employees]);

  }
  const deleteEmp=(empid)=>{
  const filteredemp=employees.filter(emp=>emp.eId!==empid); 
    setEmployees([...filteredemp])
    console.log(empid)
  }

  return (
    <>
      <div>
        <h1 className="text-center">Employees Details</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <EmplyeeList employees={employees} deleteEmp={deleteEmp} editemployee={editemployee} />
              <div>
              {isEdit?
              <EmployeeEdit selectedEmp={selectedEmp} saveEditedEmp={saveEditedEmp}/>:
              
              <AddEmployee addemployee={addemployee}/>
            }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
