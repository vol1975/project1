import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

export default function Usercrud() {
  const [userslist, setUserslist] = useState([]);
  //const initialuser = { Title: "", Year: "", Runtime: 0 };
  //const [selecteduser, setSelecteduser] = useState(initialuser);
  const updatedUser = {email: "slough.edwards@reqres.in", name: "slough",}
 

  const fetchusers = async () => {
    let url = "http://localhost:8001/users";
    let responce = await axios.get(url);

    setUserslist(responce.data);
    console.log(responce.data);
  };
  useEffect(() => {
    fetchusers();
  }, []);

  const postData = async (event) => {
    event.preventDefault();
    const url = "http://localhost:8001/users";
    try {
      const responce = await axios.post(url, {
        email: "sri.edwards@reqres.in",
        name: "sri",
      })
      fetchusers()
     
      console.log(responce)
    } catch (err) {
      console.log(err.responce);
    }
    
    
  };
  const update=async(id,e)=>{
    
    const url = "http://localhost:8001/users/";
  try {
    const responce=await axios.put(`${url}${id}`,{email: e.email,name: e.name,})
    fetchusers()
    
  } catch (error) {console.log(error.responce)
    
  }
  
  
  }

  const deleteData=async(id)=>{
    //event.preventDefault();
    const url = "http://localhost:8001/users/";

    try {
        const responce = await axios.delete(`${url}${id}` );
          
       
        fetchusers()
        console.log("DeleteMethod")
        console.log(responce.data);
      } catch (err) {
        console.log(err.responce);
      }



  }

  return (
    <>
      <div>Usercrud</div>
      <table className="table table-bordered">
        <tbody>
          {userslist.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={(e) => postData(e)}
                  >
                   postdata
                  </button>
                  <button className="btn btn-primary mx-1" onClick={()=>update(user.id,updatedUser)}>UpdataData</button>
        
                  <button className="btn btn-danger" onClick={() => deleteData(user.id)}>DeleteData</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
