import React from 'react'
import userArr from './Users.json';
import Navbar from '../components/navbar/Navbar';
import { useNavigate,createSearchParams } from 'react-router-dom';
export default function Users() {
  const navigate=useNavigate();
  const goToUserDetails=(name, {city}, email)=>{
    let obj={
        pathname:"/UsersDetails",
        search:`?${createSearchParams({name, city, email})}`,
    }
    navigate(obj);
  }
  return <>
  <Navbar/>

    <h2 className='text-center'>User List</h2>
       

        <div className='container'>
            <div className='row'>
                {userArr.map(user => {
                    let { name, email, address, phone } = user;
                    return <div className='col-sm-3'>
                        <div className="card text-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">Email : {email}</p>
                                <p className="card-text">Address : {address.city}</p>
                                <p className="card-text">Phone : {phone}</p>
                               <button onClick={() => goToUserDetails(name, address, email)}>User Details</button> 
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
  </>
}
