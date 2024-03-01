import { useState,useEffect } from "react";
import React from 'react'
import Client from "./Client";
import axios from "axios";
export default function ClientDemo() {
  
  const [user,setUsers]=useState([]);


const fetchUsers= async()=>{

   let url='/users'
    let response= await Client.get(url);
   
    console.log(response.data);

}
const fetchComments= async()=>{

    let url="/comments";
    let response= await  Client.get(url);
   
    console.log(response.data);

}
  useEffect(()=>{
    fetchUsers();
    fetchComments();

  },[])
  
  
    return (
    <div>ClientDemo</div>
  )
}
