import React from "react";
import AdminHeader from "../layouts/AdminHeader";
import "../index.css";
import AdminSideBar from "../layouts/AdminSlidebar";
import Order from "./Order";


const Overview = () => {
  return (
    <>
      <AdminHeader />
      <div className="containter">
        <div className="col-2" id="left_dasBoard_col" style={{ float: "left" }}>
          <AdminSideBar />
        </div>
        <div className="col-10" id="right_dasBoard_col" style={{float: "right" }}>
          <h1>Overview All Orders</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <Order/>
        </div>
        
      </div>
     
    </>
  );
};

export default Overview;
