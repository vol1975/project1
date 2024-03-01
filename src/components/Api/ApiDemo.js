import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
export default function ApiDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    setUsers(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Loading...</span>
          </button>
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
        
      ) : (
        <div className="container">
          <div className="row">
            {users.map((user, ind) => {
              return (
                <div className="col-md-3">
                  <div className="card" style={{ height: 300, width: 400 }}>
                    <img
                      className="card-img-top"
                      style={{ height: 100, width: 100 }}
                      src="https://img.freepik.com/premium-vector/social-avatar-stories-gradient-frame_41737-3.jpg?size=626&ext=jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{user.id}</h5>
                      <p className="card-text">{user.name}</p>
                      <a href="#" className="btn btn-primary">
                        Address
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
