import React,{useState} from 'react'
import './EmployeeCss.css';
import Modal from 'react-modal';
export default function EmplyeeList({employees,deleteEmp,editemployee}) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const initialEmp = { eId: '', name: '', sal: 0 }
    const [selectedEmp,setselectrdEmp]=useState(initialEmp)
  const[eid,seteid]=useState("");
    function openModal(eid) {
        setIsOpen(true);
      // setselectrdEmp([...emp]);
        console.log(eid)
        seteid(eid)
    }
    function closeModal() {
        setIsOpen(false);}
  
    return (
    <>
      <div>
        <table className='table table-bordered'>
          
            <tbody>
            
                {employees.map((emp, ind) => {
                 return<div> <tr key={ind}>
                    <td>{emp.eId}</td>
                    <td>{emp.name}</td>
                    <td>{emp.sal}</td>
                    <td> <button className='btn btn-success' onClick={()=>openModal(emp)}> View</button> </td>
                    <Modal
                           isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Employee Modal"
                            shouldCloseOnOverlayClick={false}
                            >
                                
                               
                                <div>
                                  
                                    
                                    <h3> Employee Id : {eid.eId}</h3>
                                    <h3> Employee Name : {eid.name}</h3>
                                    <h3> Employee Sal : {eid.sal}</h3>
                                 
                                  
                                </div>
                                <button onClick={closeModal}>close</button>
                               
                
                    </Modal>
                   
                    <td> <button className='btn btn-primary mx-1'onClick={()=>editemployee(emp)}> Edit</button></td>
                   
                    <td> <button className='btn btn-danger' onClick={()=>deleteEmp(emp.eId)}> Delete</button></td>
                    </tr>
                    </div>
                })}
             

            </tbody>
          
        </table>
      </div>
    </>
  );
}
