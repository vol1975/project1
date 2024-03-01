import React, { Component } from 'react'
import Props from './Props'
import '../categories/categories.css'
export default class PropsDemo extends Component {
    
  render() {
    const categories=[{name:"Wall Display",img:"https://assets.wfcdn.com/im/36250791/resize-h220-w220%5Ecompr-r85/5390/53901585/default_name.png "},
                    {name:"Wall Mirrors",img:"https://assets.wfcdn.com/im/84278192/resize-h220-w220%5Ecompr-r85/2686/26866564/default_name.png"},
                    {name:"Blankets &Throws",img:"https://assets.wfcdn.com/im/47606167/resize-h220-w220%5Ecompr-r85/3278/32788374/default_name.png"},
                    {name:"Cushions",img:"https://assets.wfcdn.com/im/85523880/resize-h220-w220%5Ecompr-r85/5935/59358526/default_name.png"},
                    {name:"Wall Stickers",img:"https://assets.wfcdn.com/im/97477672/resize-h220-w220%5Ecompr-r85/3021/30215572/default_name.png"}];
        
    






    return (
      <>
      <div className="container">
        <div className='row'>
            {
                categories.map((item,ind)=> {
                    return <Props category={item}/>

                })
            }
        </div>
      </div>
      </>
    )
  }
}
