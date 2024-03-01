import React, {useState}from 'react';
import products from './products.json';
import SearchBar from 'react-js-search';
import './products.css';
 import ReactPaginate from 'react-paginate';
//import Pagination from 'react-bootstrap/Pagination'



export default function Productlist() {
  const[filteredProducts,setfilteredProducts]= useState(products);
  const sortAsc=()=>{
    let sortedproducts=filteredProducts.sort((p1,p2)=>p1.price-p2.price);
    setfilteredProducts([...sortedproducts]);
  }
  const sortDesc=()=>{

    let sortedproducts=filteredProducts.sort((p1,p2)=>p2.price-p1.price);
    setfilteredProducts([...sortedproducts]);
  }
  const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    const endOffset = itemOffset + itemsPerPage;
    const products1 = filteredProducts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
        setItemOffset(newOffset);
    };

    
  return (
    <>
    
    <div className="container">
      <div className='row'>
        <div className='col-sm-8'>
        <SearchBar 
            onSearchTextChange={ (term,filteredData) => {
              
              setfilteredProducts([...filteredData]);
                }}

            //onSearchButtonClick={this.onSearchClick}
             placeHolderText={"Search here..."}
            data={products}/>
        </div>
        <div className='col-sm-4'>
          <button onClick={sortAsc} className='btn btn-primary m-1'>
            Asc
          </button>
          <button onClick={sortDesc} className='btn btn-secondary'>
            Desc
          </button>
      </div>
       </div>




        <div className="row" >
            {
                filteredProducts.map(item =>{
                  
                 return <div className='col-md-3' > 
                    <div className="card" >
                    <img src={item.image} className="card-img-top" alt="..."  style={{height:100, width:100}}/>
                    <div className="card-body">
                    <h5 className="card-title">{item.category}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text text-truncate" title={item.price}>{item.price}</p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
                   </div>
                   }
                )
            }

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
