import React from 'react'
import './ProductList.css'
export default function Dropdown_datalist() {
   
  const productCategories = [
    'Electronics',
    'Clothing',
    'Home and Kitchen',
    'Books',
    'Toys and Games',
    'Beauty and Personal Care',
    'Sports and Outdoors',
    'Automotive',
    'Health and Wellness',
    'Office Supplies',
    
  ];
  return (
    <>
   <div className="listcontainer">
   
      <select className="box" >
          <option>Please select Option</option>
          {productCategories.map((item,ind)=>{
          return <div>
                 <option key={ind}>{item} </option>
                </div> 
        })}  
      </select> 
      
      <input  list="productlist" placeholder="Search" />
      <datalist id="productlist" className='box'>
          
          {
            productCategories.map((item,ind)=>{
            return <option key={ind} >
                   {item}
                  </option>
          })
        }

      </datalist>

    </div>         
    </>          
  )            
}
              
              
          
    

  


    
    
    
  

