

import React from "react";
import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";
import "../index.css";
import { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Button } from "reactstrap"; 


const UserProfile = ({ history }) => {
  const match = useRouteMatch();
  const [users, setUsers] = useState([]);

  const getTodo = (id) =>
    fetch(`/api/users/Userprofile/${id}`).then((res) => res.json());

  useEffect(() => {
    const fetchTodo = async () => {
      const users = await getTodo(match.params.id);
      setUsers(users);
    };
    fetchTodo();
  }, [history]);

  return (
    <>
      <AdminHeader />
      <div className="containter">
        <div className="col-2" id="left_dasBoard_col" style={{ float: "left" }}>
          <AdminSideBar />
        </div>
        <div
          className="col-10"
          id="right_dasBoard_col"
          style={{ float: "right" }}
        >
          <h1>User Profile</h1>
          <p className="tailorprofile">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </p>
          <Link to="/User/UserMain">
          <Button color="success">Go Back</Button>
          </Link>
          <table class="table border" style={{ marginTop: "60px" }}>
            <thead>
              <tr>
                <th scope="col">
                  Name: <h1>{users.username} </h1>
                </th>
                {/* <th scope="col"> Email:{tailors.email}</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Email: </strong> {users.email}</td>
                <td><strong>Phone: </strong> {users.phone} </td>
              </tr>
              <tr>
                <td> <strong>Gender: </strong>{users.gender} </td>
                <td><strong>birthday: </strong>{users.birthday}</td>
              </tr>
            </tbody>
          </table>

          <div className="AP_address">
            <p>
              <strong>Address:  </strong>{users.address}
            </p>
          </div>
         

                  
        </div>
      </div>
    </>
      

  );
};

export default UserProfile;

 
