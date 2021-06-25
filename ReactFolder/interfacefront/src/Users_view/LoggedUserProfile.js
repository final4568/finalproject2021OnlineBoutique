import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";
import "../index.css";
import UserHeader from "../layouts/UserHeader";


const LoggedUserProfile = ({ history }) => {
  const [userprofile, setProfile] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) history.push("/user/login");

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axios.get(
          "/api/users/LoggedUserProfile",
          config
        );
        setProfile(data);
      } catch (error) {
        console.log("You are not authorized, please login first");
      }
    };

    fetchPrivateDate();
  }, [history]);
  return (
    < >
      <UserHeader/>
      <div className="containter">
        <div
          className="col-12"
          id="right_dasBoard_col"
          style={{ float: "right", marginRight: "0px"}}>

          <h1>User Profile</h1>
          <p className="tailorprofile">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </p>

          <table class="table border" style={{ marginTop: "60px" }}>
            <thead>
              <tr>
                <th scope="col">
                  Name: <h1>{userprofile.username} </h1>
                </th>
                {/* <th scope="col"> Email:{tailors.email}</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Email: </strong> {userprofile.email}
                </td>
                <td>
                  <strong>Phone: </strong> {userprofile.phone}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Gender: </strong>
                  {userprofile.gender}
                </td>
                <td>
                  <strong>Birthday: </strong>
                  {userprofile.birthday}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="AP_address">
            <p>
              <strong>Address: </strong>
              {userprofile.address}
            </p>
          </div>
          
          <Link to={`/LoogeduserProfile/Edit/${userprofile._id}`}>
            <Button
              id="btn_table"
              color="warning"
              style={{
                marginTop: "30px",
                marginBottom: "60px",
                float: "right",
              }}
            >
              Click To Edit Profile
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoggedUserProfile;

