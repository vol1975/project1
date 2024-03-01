import React from 'react'
import '../categories/categories.css'
export default function Props(props) {
  return (<>
    <div className="col">
      <div className='category text-center'> 
          <img className="img" src={props.category.img}/>
            <div>{props.category.name}</div>
        </div>
    </div>
    </>
    );
}
