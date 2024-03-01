import React, { useEffect,useState } from 'react'

export default function FunctionalComponentLifecycle() {
 const[userId,setUserId]=useState(1);
 const[userInfo,setUserInfo]=useState({});
 
 const increment=()=>{
    setUserId(userId+1)
 }
 const fetchUserData = async (id) => {
    let resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let userInfo = await resp.json();
    setUserInfo(userInfo)
}
useEffect(()=>{fetchUserData();},[userId])
 
 return <>
 <h2>User Id is {userId} and plz check console for the details of this user</h2>
 <button onClick={increment}>increment</button>
 <hr />
 <div className='col-sm-3'>
     <div className="card text-center">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU" className="card-img-top" alt="..." />
         <div className="card-body">
             <h5 className="card-title">{userInfo?.name}</h5>
             <p className="card-text">Email : {userInfo?.email}</p>
             <p className="card-text">Address : {userInfo?.city}</p>
             <p className="card-text">Phone : {userInfo?.phone}</p>
             <a href="#" className="btn btn-primary">Details</a>
         </div>
     </div>
 </div>
</>
}