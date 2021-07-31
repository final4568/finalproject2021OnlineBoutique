import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";

import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";

import "../index.css";

const Adminprofile = ({ history }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) history.push("/admin/login");

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axios.get("/api/admin/adminprofile", config);
        setProfile(data);
      } catch (error) {
        console.log("You are not authorized, please login first");
      }
    };

    fetchPrivateDate();
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
          <h1>Admin Profile</h1>
          <p className="tailorprofile">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </p>
          <Link to="/admin/dashboard">
            <Button color="success">Go Back</Button>
          </Link>
          <table class="table border" style={{ marginTop: "60px" }}>
            <thead>
              <tr>
                <th scope="col">
                  Name: <h1>{profile.username} </h1>
                </th>
                {/* <th scope="col"> Email:{tailors.email}</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Email: </strong> {profile.email}
                </td>
                <td>
                  <strong>Phone: </strong> {profile.phone}{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <strong>Gender: </strong>
                  {profile.gender}{" "}
                </td>
                <td>
                  <strong>User-Type: </strong>
                  {profile.usertype}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="AP_address">
            <p>
              <strong>Address: </strong>
              {profile.address}
            </p>
          </div>
          <div className="AP_address">
            <p>
              <strong>Admin Bio:</strong> {profile.bio}
            </p>
          </div>

          <Link to={`/admin/update/${profile._id}`}>
            <Button
              id="btn_table"
              color="warning"
              style={{
                marginTop: "30px",
                marginBottom: "60px",
                float: "right",
              }}
            >
              {" "}
              Click To Edit Profile{" "}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Adminprofile;
