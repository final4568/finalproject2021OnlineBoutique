import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";
import Dashboard_component from "../layouts/Dashboard_component";
import Order from '../product/Order'



const AdminDashboard = ({ history }) => {
  const [error, setError] = useState("");
  const [privateDate, setPrivateData] = useState("");

  
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/admin/login");
    }

    const fetchData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,

        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        console.log(data);
        setPrivateData(data.data); 

      } catch (error) {
        setError("You are not authorized, please login first");
      }
    };

    fetchData();
  }, [history]);



  return error ? (
    <div style={{ textAlign: "center" }}>
      <span className="error-message">{error}</span>
    </div>
  ) : (

    <>
      <AdminHeader />
      <div className="containter">
        <div className="col-2" id="left_dasBoard_col" style={{ float: "left" }}>
          <AdminSideBar />
        </div>
        <div className="col-10" id="right_dasBoard_col" style={{ float: "right", paddingRight:"20px"}}>
           <p>Control Panel</p>
          <h1 style={{marginTop:"-10px"}}>Admin Dashboard</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        <Dashboard_component/>
        <Order/>
        </div>
      </div>

      
    </>
  );
};

export default AdminDashboard;
