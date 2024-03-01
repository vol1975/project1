import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const navigate = useNavigate();

  const fetchData = async () => {
    let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(res.data);
    setProductDetails(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const HomePage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="col-sm-4 offset-4">
        <h1 className="text-center">Product Details Page</h1>

        <div className="card">
          <img
            src={productDetails.image}
            className="card-img-top"
            style={{ height: 100, width: 100 }}
            alt="something"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{productDetails.category}</h5>
            <p
              className="card-text text-truncate"
              title={productDetails.description}
            >
              {productDetails.description}
            </p>
            <p className="card-text text-truncate" title={productDetails.price}>
              {productDetails.price}
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="text-center">
        <button onClick={HomePage}> HomePage</button>
      </div>
    </>
  );
}
