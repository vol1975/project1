import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Career() {
  return (
    <>
      <div>Career</div>

      {/* <div>
        {" "}
        <NavLink className="nav-link" to="perminentJobs">
          perminentJobs
        </NavLink>
        <NavLink className="nav-link" to="ContractJobs">
          ContractJobs
        </NavLink>
        <outlet />
      </div> */}



      <div>
            <Link to="PerminentJobs">perminentJobs</Link>
            <Link to="ContractJobs">ContractJobs</Link>

      </div>
      <Outlet/> 
    </>
  );
}
