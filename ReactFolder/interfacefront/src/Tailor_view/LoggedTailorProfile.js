import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";
import "../index.css";
import TailorHeader from "../layouts/TailorHeader";
import TailorSideBar from "../layouts/TailorSidebar";

const LoggedTailorProfile = ({ history }) => {
  const [tailorprofile, setProfile] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) history.push("tailor/login");

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axios.get(
          "/api/tailor/LoggedTailorProfile",
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
      <TailorHeader/>
      <div className="containter">
        <div className="col-2" id="left_dasBoard_col" style={{ float: "left" }}>
          <TailorSideBar />
        </div>
        <div
          className="col-10"
          id="right_dasBoard_col"
          style={{ float: "right", marginRight: "0px"}}>

          <h1>Tailor Profile</h1>
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
                  Name: <h1>{tailorprofile.username} </h1>
                </th>
                {/* <th scope="col"> Email:{tailors.email}</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Email: </strong> {tailorprofile.email}
                </td>
                <td>
                  <strong>Phone: </strong> {tailorprofile.phone}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Gender: </strong>
                  {tailorprofile.gender}
                </td>
                <td>
                  <strong>User-Type: </strong>
                  {tailorprofile.usertype}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="AP_address">
            <p>
              <strong>Address: </strong>
              {tailorprofile.address}
            </p>
          </div>
          <div className="AP_address">
            <p>
              <strong>Admin Bio:</strong> {tailorprofile.bio}
            </p>
          </div>
          <Link to={`/LoggedInTailorUpdate/${tailorprofile._id}`}>
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

export default LoggedTailorProfile;
