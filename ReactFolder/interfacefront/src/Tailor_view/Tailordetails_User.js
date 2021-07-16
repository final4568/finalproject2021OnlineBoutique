import React from "react";
import UserHeader from "../layouts/UserHeader";
import AdminSideBar from "../layouts/AdminSlidebar";
import "../index.css";
import { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import {Button} from "reactstrap";


const Tailordetails_User = ({ history }) => {
  const match = useRouteMatch();
  const [tailors, setTailor] = useState([]);

  const getTodo = (id) =>
    fetch(`/api/tailor/tailorprofile/${id}`).then((res) => res.json());

  useEffect(() => {
    const fetchTodo = async () => {
      const tailors = await getTodo(match.params.id);
      setTailor(tailors);
    };
    fetchTodo();
  }, [history]);

  return (
    <>
      <UserHeader />
      <div className="containter">
       
        <div
          className="col-12"
          id="right_dasBoard_col"
          style={{ float: "right" }}
        >
          <h1>Tailor Profile</h1>
          <p className="tailorprofile">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </p>
  
          <Link to="/users/All/Tailor">
          <Button color="success">Go Back</Button>
          </Link>
          <table class="table border" style={{ marginTop: "60px" }}>
            <thead>
              <tr>
                <th scope="col">
                  Name: <h1>{tailors.username} </h1>
                </th>
                {/* <th scope="col"> Email:{tailors.email}</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Email: </strong> {tailors.email}</td>
                <td><strong>Phone: </strong> {tailors.phone} </td>
              </tr>
              <tr>
                <td> <strong>Gender: </strong>{tailors.gender} </td>
                <td><strong>User-Type: </strong>{tailors.usertype}</td>
              </tr>
            </tbody>
          </table>

          <div className="AP_address">
            <p>
              <strong>Address:  </strong>{tailors.address}
            </p>
          </div>
          <div className="AP_address">
            <p>
              <strong>Admin Bio:</strong> {tailors.bio}
            </p>
          </div>

                  
        </div>
      </div>
    </>
      

  );
};

export default Tailordetails_User;
