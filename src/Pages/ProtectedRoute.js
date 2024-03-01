import React from 'react'
import { Navigate } from 'react-router-dom'
export default function ProtectedRoute({children}) {
  const role="student"
  if(role==="student1"){
    alert('you r not allowed')
    return<Navigate to="/" replace/>
  }
  
  
  
  
  
  return children;
}
