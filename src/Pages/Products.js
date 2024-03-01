import React from "react";
import Productlist from "../components/productlist/Productlist";
import ProductArr from "./Products.json";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
export default function Products() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-3 ">
          {ProductArr.map((item, ind) => {
            return (
              <div className="col-sm-3 mb-1" key={item.id}>
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    style={{ height: 100, width: 100 }}
                    alt="something"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.category}</h5>
                    <p
                      className="card-text text-truncate"
                      title={item.description}
                    >
                      {item.description}
                    </p>
                    <p className="card-text text-truncate" title={item.price}>
                      {item.price}
                    </p>
                    <Link to={`/ProductDetails/${item.id}`}>View</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
