import React from "react";
import { Link, NavLink } from "react-router-dom";
import Products from "../../Pages/Products";

export default function Navbar() {
  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* //<a className="navbar-brand" href="#">What we do</a> */}
          {/* <Link to='WhatwedoPage'>Whatwedo </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                    //     {/* <a className="nav-link active" aria-current="page" href="#">What's in store</a> */}
              {/* //     <Link to='WhatinstorePage'> What's in store</Link>
                    // </li> */}

              {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Treasure</a></li>
                            <li><a className="dropdown-item" href="#">Contact us</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Find us</a></li>
                        </ul>
                    </li> */}

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                {/* //<a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Products</a> */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">
                  Products
                </NavLink>
                {/* //<a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Products</a> */}
              </li>
              <li className="nav-item">
                
                <NavLink className="nav-link" to="/Users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
               
                <NavLink className="nav-link" to="/Career">
                Career
                </NavLink>
              </li>




            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <NavLink className="nav-link" to="/SearchPage"> Search </NavLink>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <h1 className="text-center" style={{ textDecorationStyle: "wavy" }}>
          {" "}
          Welcome To HomeSense
        </h1>
      </div>
    </>
  );
}
