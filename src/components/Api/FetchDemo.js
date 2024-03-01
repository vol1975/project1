import { useState,useEffect } from "react";
import React from 'react'

export default function FetchDemo() {
  
  const [user,setUsers]=useState([]);
//   const fetchUsers=()=>{
//     let url="https://jsonplaceholder.typicode.com/users";
//     fetch(url).then(response=>{response.json().then(users=>{console.log(users)
//     setUsers(users)})})
//   }
const fetchUsers= async()=>{

    let url="https://jsonplaceholder.typicode.com/users";
    let response= await  fetch(url);
    let users= await response.json();
    console.log(users);

}
  useEffect(()=>{fetchUsers()

  },[])
  
  
    return (
    <div>FetchDemo</div>
  )
}
