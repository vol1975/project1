import React from 'react'

function DisplayErrorDemo({name}) {
  if(name==='john'){
    console.log(name);
    throw new Error('error in Name');
  }
  
  
  return <>
    <div>DisplayErrorDemo {name}</div>

  </>
}

export default DisplayErrorDemo