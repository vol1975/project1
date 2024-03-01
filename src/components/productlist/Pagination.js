import React ,{useState}from 'react'
import products from './products.json';
import './products.css';
import ReactPaginate from 'react-paginate';
export default function Pagination() {

  const[currentPage,setcurrentpage]=useState(0);

  const itemsperPage=4;
  const noofproductslisted=currentPage*itemsperPage;
  const pageCount=Math.ceil(products.length/itemsperPage);
    const handlePageClick=({selected})=>
    {
        setcurrentpage(selected);
    }
 const displayproducts=products.slice(noofproductslisted,noofproductslisted+itemsperPage)
 .map((item,ind)=>{
    return<>
            <div className='col-md-3'>

            <div className="card" >
            <img src={item.image} className="card-img-top" alt="..."  style={{height:100, width:100}}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.category}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
           </div>
            </div>
        </>})
  
  return (<>
        <div className='container'>
            <div className='row'>
             {displayproducts}
             <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                />

                    
           </div>
            </div>
    </>
  )
}
