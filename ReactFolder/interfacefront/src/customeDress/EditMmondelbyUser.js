import React from "react";
import UserHeader from "../layouts/UserHeader";

import "../index.css";
import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import axios from "axios";
import Addmeasurement from "./Addmeasurement";

const EditManModelbyUser = ({ history }) => {
  const productname = "Man Custom Dress";
  const producttype = "Customdress";
  const[orderstatus, setOrderstatus] =useState({});
  const [orderid, setOrderid] = useState({});


  const [selected, setSelected] = useState("");
  const [data, setData] = useState({});

  const [coller, setColler] = useState(
    "M325.7,59.1c0,0.2,0,0.4,0.1,0.6l-0.5-1.9c-50-11.5-96-0.4-96-0.4l-3.5,6.9l0,0.1l-7.2,13.1c0,0,9.3,32.6,52.6,37.6c0,0,2.4-17.3-10.6-23.2c0,0-16.4-8.5-25.7-18.9c40.1-9.7,74.2-1.9,85.1,0.6c-9.1,10.8-26.2,18.4-26.2,18.4c-13,5.9-10.3,22.8-10.3,22.8c43.3-5,52.3-37.3,52.3-37.3L325.7,59.1z"
  );
  const [collercolor, setCollercolor] = useState("a67d11");
  const [collerid, setCollerid] = useState("coller");

  const [shirtbody, setBody] = useState(
    "M139.3,115.4L164,99.9L217.4,77c0,0,60.9-22.2,117.5,1.1c14.6,6,29.2,12,43.7,18 c8.5,3.5,18.6,7,26.2,12.4c3.7,2.6,7.1,5.9,10.6,8.8l-12.6,88.9l5.5,292.7l12.5,204.9c0,0-25.9,52.3-140.5,59.5	c-114.6,7.2-160.7-59.5-160.7-59.5l25.1-235L155,275l-7-74.3L139.3,115.4z"
  );
  const [bodycolor, setBodycolor] = useState("313828");
  const [bodyid, setBodyid] = useState("body1");

  const manageColler = (e) => {
    setCollerid(e.target.getAttribute("id"));
    setCollercolor(e.target.getAttribute("fill"));
    setColler(e.target.getAttribute("d"));
    setSelected(collerid);
  };
  const managebody = (e) => {
    setBodyid(e.target.getAttribute("id"));
    setBodycolor(e.target.getAttribute("fill"));
    setBody(e.target.getAttribute("d"));
    setSelected(bodyid);
  };
  const setColor = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setCollercolor(color);
    console.log(data);
  };

  const setColorbody = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setBodycolor(color);
    console.log(data);
  };
  const match = useRouteMatch();
  const [orderdetails, setOrderdetails] = useState({});

  const [shirtbodyz, setShirtbodyz] = useState({});
  const [bodyidz, setBodyidz] = useState({});
  const [bodycolorz, setBodycolorz] = useState({});

  const [collersz, setCollerz] = useState({});
  const [colleridsz, setColleridz] = useState({});
  const [collercolorsz, setCollercolorz] = useState({});

  const getorderdetail = (id) =>
    fetch(`/api/oders/orderdetail/${id}`).then((res) => res.json());

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) history.push("/user/login");
    const fetchdetail = async () => {
      const orderdetails = await getorderdetail(match.params.id);
      setOrderdetails(orderdetails);
      console.log(orderdetails);
      setOrderid(orderdetails._id)

      setBodyidz(orderdetails.bodyid);
      setShirtbodyz(orderdetails.shirtbody);
      setBodycolorz(orderdetails.bodycolor);

      setCollerz(orderdetails.coller);
      setColleridz(orderdetails.collerid);
      setCollercolorz(orderdetails.collercolor);
    };
    fetchdetail();
  }, [history]);
  const Editmodel = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
        const body = {productname,
            producttype,
            collerid,
            collercolor,
            bodyid,
            bodycolor,
            coller,
            shirtbody,
            orderstatus:"SUBMITTED"
        }
        await fetch(`/api/oders/orderUpdate/${match.params.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          alert("Your Dress Cutomized Successfully");
          history.puch("/customdress/allorderbyuser")

     
    } catch (e) {
      console.log(e);
    }
   
  };


  return (
    <>
      <UserHeader />
      <div className="containter">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingTop: "30px" }}>
        <h2 style={{ textTransform: "uppercase", fontSize: "30px" }}>
          Edit Your Dress
        </h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
          <Link to="/customdress/allorderbyuser">
            <Button color="success">Go Back</Button>
          </Link>
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-7" id="svgcol_right">
            <div className="row">
              <div className="col-lg-6">
                previous design
                <svg
                  version="1.11"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 600 800"
                  style={{ width: "400px", marginTop: "-10px" }}
                >
                  <g ids="XMLID_9_1">
                    <g ide="XMLID_47_1">
                      <path
                        id="Left_Arma"
                        class="st01"
                        d="M489.9,479.1c0,0,5.9-10.2,1.4-26.3c0,0-52.3-317.3-76.3-335.6l-13.6,89.2l2,100.1l1.8,67
l35.2,145.4c0,0,19,10.4,54.1-12.5L489.9,479.1z"
                        fill="#313828"
                        stroke="#020202"
                        stroke-width="0.3"
                        stroke-miterlimit="10"
                        // onClick={() => setSelected("Left_Arm")}
                        //right arm
                      />
                      <path
                        id="Left_Arm1"
                        class="st01"
                        d="M139.1,115.6c-24,18.3-76.7,335.1-76.7,335.1C58,466.8,63.9,477,63.9,477l-4.7,27.2
c35.1,22.9,54.1,12.5,54.1,12.5l33.8-135.3l12.7-76l-2.5-99.9L139.1,115.6z"
                        fill="#313828"
                        stroke="#020202"
                        stroke-width="0.3"
                        stroke-miterlimit="10"

                        //left arm
                      />
                    </g>
                  </g>
                  <path
                    id={bodyidz}
                    class="st1ss"
                    d={shirtbodyz}
                    fill={bodycolorz}
                    stroke="#020202"
                    stroke-width="0.3"
                    stroke-miterlimit="10"

                    //body
                  />
                  <g ids="XMLID_13_1">
                    <g ide="XMLID_52_1">
                      <path
                        id="Lower_Pati1"
                        class="st2"
                        d="M270.9,113.4l-20.1-3.5c-3.5,41.6,9.7,108.6,15.3,131.5c2.1-10.9,6.1-32.5,9.8-55.2
C269.2,160.7,270.9,113.4,270.9,113.4z"
                        fill="#a67d11"

                        //top lower patti
                      />

                      <path
                        id="Upper_Pati1"
                        class="st21"
                        d="M299.3,106.8c0,0-1.3-1.7-6.2-1c-3.4,0.5-11.7,0.5-9.6,10c1.1,4.7,0.2,9-0.7,19.3
c-1.3,14.4-4,33.1-6.9,51.1c0,0.1,0.1,0.2,0.1,0.4c-0.4,1.9-1.5,8.4-1.8,10.3c-1,8-3.1,16-4.1,24c-0.9,7.2-3,13.7-3.9,20.9
c0-0.1-0.1-0.2-0.1-0.3c-0.9,4.6-1.4,7.2-1.4,7.2l5.7,11.7l10.5-8.6C317.9,83.4,299.3,106.8,299.3,106.8z"
                        fill="#a67d11"
                        // onClick={() => setSelected("Upper_Pati")}

                        //top upper patti
                      />
                    </g>
                  </g>

                  <path
                    id={colleridsz}
                    class="st3"
                    d={collersz}
                    fill={collercolorsz}
                  />

                  <g ide="XMLID_1_1">
                    <polygon
                      id="Pocket_Lower_part1"
                      class="st41"
                      points="319.6,196.5 319.6,246.2 374.1,246.2 374.1,196.6 "
                      fill="#a67d11"
                    />

                    <polygon
                      id="Pocket_Upper_part1"
                      class="st51"
                      points="374.1,185.3 319.6,185.3 319.6,198.2 374.1,198"
                      fill="#fff"
                      //   onClick={() => setSelected("Pocket_Upper_part")}

                      //front pocket upper part
                    />
                  </g>

                  <g ide="XMLID_2_1">
                    <circle
                      id="2nd_button1"
                      class="st61"
                      cx="263.2"
                      cy="163.1"
                      r="4.3"
                      //button 1
                      fill="#fff"
                      //   onClick={() => setSelected("2nd_button")}
                    />

                    <circle
                      id="3rd_button1"
                      class="st61"
                      cx="266.8"
                      cy="187.4"
                      r="4.3"
                      //button 2
                      fill="#fff"
                      //   onClick={() => setSelected("3rd_button")}
                    />

                    <circle
                      id="1st_button1"
                      class="st61"
                      cx="260.3"
                      cy="137.3"
                      r="4.3"
                      //button 3
                      fill="#fff"
                      //   onClick={() => setSelected("1st_button")}
                    />
                  </g>

                  <g ids="XMLID_8_1">
                    <g ide="XMLID_55_1">
                      <path
                        id="Left_Coof_1"
                        class="st7"
                        d="M489.8,479.1c-20.4-5-56.4,10.3-56.4,10.3l6.7,29.3c11.5-13.9,54.3-12.3,54.3-12.3L489.8,479.1z"
                        //mscoofleft
                        fill="#a67d11"
                        // onClick={() => setSelected("Left_Coof")}
                      />

                      <path
                        id="Right_Coof1"
                        d="M59.3,504c16.1-8.1,54.1,12.5,54.1,12.5l6.2-24.6c-16.7-12.8-55.6-15.2-55.6-15.2L59.3,504z"
                        fill="#a67d11"
                        // onClick={() => setSelected("Right_Coof")}

                        //Coofright
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="col-lg-6">
                EditManModelbyUser
                <div>
                  Selected:{" "}
                  <strong
                    style={{
                      marginTop: "10px",
                      fontWeight: "700",
                      color: "green",
                    }}
                  >
                    {selected}
                  </strong>
                </div>
                <svg
                  version="1.12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 600 800"
                  style={{ width: "400px", marginTop: "-10px" }}
                >
                  <g ids="XMLID_9_">
                    <g ide="XMLID_47_">
                      <path
                        id="Left_Armz"
                        class="st0"
                        d="M489.9,479.1c0,0,5.9-10.2,1.4-26.3c0,0-52.3-317.3-76.3-335.6l-13.6,89.2l2,100.1l1.8,67
			l35.2,145.4c0,0,19,10.4,54.1-12.5L489.9,479.1z"
                        fill="#313828"
                        stroke="#020202"
                        stroke-width="0.3"
                        stroke-miterlimit="10"
                        onClick={() => setSelected("Left_Armz")}
                        //right arm
                      />
                      <path
                        id="Right_Arm"
                        class="st0"
                        d="M139.1,115.6c-24,18.3-76.7,335.1-76.7,335.1C58,466.8,63.9,477,63.9,477l-4.7,27.2
			c35.1,22.9,54.1,12.5,54.1,12.5l33.8-135.3l12.7-76l-2.5-99.9L139.1,115.6z"
                        fill="#313828"
                        stroke="#020202"
                        stroke-width="0.3"
                        stroke-miterlimit="10"
                        onClick={() => setSelected("Right_Arm")}

                        //left arm
                      />
                    </g>
                  </g>
                  <path
                    // id={bodyid}
                    // class="st1"
                    // d={shirtbody}
                    // fill="#313828"
                    // stroke="#020202"
                    // stroke-width="0.3"
                    // stroke-miterlimit="10"
                    // onClick={managebody}

                    id={bodyid}
                    class="st1"
                    d={shirtbody}
                    fill="#313828"
                    onClick={managebody}

                    //body
                  />
                  <g ids="XMLID_13_">
                    <g ide="XMLID_52_">
                      <path
                        id="Lower_Pati"
                        class="st2"
                        d="M270.9,113.4l-20.1-3.5c-3.5,41.6,9.7,108.6,15.3,131.5c2.1-10.9,6.1-32.5,9.8-55.2
			C269.2,160.7,270.9,113.4,270.9,113.4z"
                        fill="#a67d11"
                        onClick={() => setSelected("Lower_Pati")}

                        //top lower patti
                      />

                      <path
                        id="Upper_Pati"
                        class="st2"
                        d="M299.3,106.8c0,0-1.3-1.7-6.2-1c-3.4,0.5-11.7,0.5-9.6,10c1.1,4.7,0.2,9-0.7,19.3
			c-1.3,14.4-4,33.1-6.9,51.1c0,0.1,0.1,0.2,0.1,0.4c-0.4,1.9-1.5,8.4-1.8,10.3c-1,8-3.1,16-4.1,24c-0.9,7.2-3,13.7-3.9,20.9
			c0-0.1-0.1-0.2-0.1-0.3c-0.9,4.6-1.4,7.2-1.4,7.2l5.7,11.7l10.5-8.6C317.9,83.4,299.3,106.8,299.3,106.8z"
                        fill="#a67d11"
                        onClick={() => setSelected("Upper_Pati")}

                        //top upper patti
                      />
                    </g>
                  </g>

                  <path
                    id={collerid}
                    class="st3"
                    d={coller}
                    fill="#a67d11"
                    onClick={manageColler}

                    //coller
                  />

                  <g ide="XMLID_1_">
                    <polygon
                      id="Pocket_Lower_part"
                      class="st4"
                      points="319.6,196.5 319.6,246.2 374.1,246.2 374.1,196.6 "
                      fill="#a67d11"
                      onClick={() => setSelected("Pocket_Lower_part")}

                      //front pocket lower part
                    />

                    <polygon
                      id="Pocket_Upper_part"
                      class="st5"
                      points="374.1,185.3 319.6,185.3 319.6,198.2 374.1,198"
                      fill="#fff"
                      onClick={() => setSelected("Pocket_Upper_part")}

                      //front pocket upper part
                    />
                  </g>

                  <g ide="XMLID_2_">
                    <circle
                      id="2nd_button"
                      class="st6"
                      cx="263.2"
                      cy="163.1"
                      r="4.3"
                      //button 1
                      fill="#fff"
                      onClick={() => setSelected("2nd_button")}
                    />

                    <circle
                      id="3rd_button"
                      class="st6"
                      cx="266.8"
                      cy="187.4"
                      r="4.3"
                      //button 2
                      fill="#fff"
                      onClick={() => setSelected("3rd_button")}
                    />

                    <circle
                      id="1st_button"
                      class="st6"
                      cx="260.3"
                      cy="137.3"
                      r="4.3"
                      //button 3
                      fill="#fff"
                      onClick={() => setSelected("1st_button")}
                    />
                  </g>

                  <g ids="XMLID_8_">
                    <g ide="XMLID_55_">
                      <path
                        id="Left_Coof"
                        class="st7"
                        d="M489.8,479.1c-20.4-5-56.4,10.3-56.4,10.3l6.7,29.3c11.5-13.9,54.3-12.3,54.3-12.3L489.8,479.1z"
                        //mscoofleft
                        fill="#a67d11"
                        onClick={() => setSelected("Left_Coof")}
                      />

                      <path
                        id="Right_Coof"
                        d="M59.3,504c16.1-8.1,54.1,12.5,54.1,12.5l6.2-24.6c-16.7-12.8-55.6-15.2-55.6-15.2L59.3,504z"
                        fill="#a67d11"
                        onClick={() => setSelected("Right_Coof")}

                        //Coofright
                      />
                    </g>
                  </g>
                </svg>
                <button
            style={{
              marginBottom: "50px",
              float: "right",
              background: "green",
              marginTop: "100px",
              color: "#fff",
              padding: "20px 40px 20px 40px",
              borderRadius: "5px",
            }}
            onClick={Editmodel}
          >
            Save Edit 
          </button>
        

            <Link to={`/customized/Measment_EditbyUser/${orderid}`}>
            <button
            style={{
              marginBottom: "50px",
              marginRight:"20px",
              float: "right",
              background: "green",
              marginTop: "100px",
              color: "#fff",
              padding: "20px 40px 20px 40px",
              borderRadius: "5px",
            }}
          
          >
            Change Size
          </button>
            </Link>
          

              </div>
              
            </div>
           
          </div>

          <div className="col-lg-5">
            <div
              style={{
                fontWeight: 800,
                color: "green",
                border: "1px solid gray",
                borderRadius: "5px",
                padding: "20px",
              }}
            >
              <strong> SVG Components</strong>
              <br />
              <br />
              <div className="svg_part">
                <svg>
                  <path
                    id="Coller2"
                    class="st0"
                    d="M63.7,45.9c0,0.1,0,0.1,0,0.2l-0.1-0.5c-14-3.2-26.8-0.1-26.8-0.1l-1,1.9l0,0l-2,3.7
c0,0,2.6,9.1,14.7,10.5c0,0,0.7-4.8-3-6.5c0,0-4.6-2.4-7.2-5.3c11.2-2.7,20.8-0.5,23.8,0.2c-2.6,3-7.3,5.1-7.3,5.1
c-3.6,1.6-2.9,6.4-2.9,6.4c12.1-1.4,14.6-10.4,14.6-10.4L63.7,45.9z"
                    fill="#2917AD"
                    onClick={manageColler}
                  />
                </svg>
              </div>

              <svg className="svg_part">
                <path
                  id="Coller3"
                  class="st0"
                  transform="translate(-150, 0)"
                  d="M325.7,59.1c0,0.2,0,0.4,0.1,0.6l-0.5-1.9c-50-11.5-96-0.4-96-0.4l-3.5,6.9l0,0.1l-7.2,13.1c0,0,9.3,32.6,52.6,37.6c0,0,2.4-17.3-10.6-23.2c0,0-16.4-8.5-25.7-18.9c40.1-9.7,74.2-1.9,85.1,0.6c-9.1,10.8-26.2,18.4-26.2,18.4c-13,5.9-10.3,22.8-10.3,22.8c43.3-5,52.3-37.3,52.3-37.3L325.7,59.1z"
                  fill="#2917AD"
                  onClick={manageColler}
                />
              </svg>

              <svg>
                <path
                  id="body2"
                  class="st1"
                  d="M139.3,115.4L164,99.9L217.4,77c0,0,60.9-22.2,117.5,1.1c14.6,6,29.2,12,43.7,18 c8.5,3.5,18.6,7,26.2,12.4c3.7,2.6,7.1,5.9,10.6,8.8l-12.6,88.9l5.5,292.7l12.5,204.9c0,0-25.9,52.3-140.5,59.5	c-114.6,7.2-160.7-59.5-160.7-59.5l25.1-235L155,275l-7-74.3L139.3,115.4z"
                  fill="#323829"
                  onClick={managebody}
                />
              </svg>
              <svg>
                <g className="svg_part">
                  <path
                    id="body3"
                    class="st1"
                    d="M159.3,143.3l24.7-14.7l53.4-21.8c0,0,60.9-21.1,117.5,1c14.6,5.7,29.2,11.4,43.7,17.2
		c8.5,3.4,18.6,6.7,26.2,11.8c3.7,2.5,7.1,5.6,10.6,8.4l-12.6,84.6l5.5,278.6L443,750.2c0,0-27.9,7.4-142.7,9.8
		C183,762.6,139,750.2,139,750.2l25.7-270.4L175,295.3l-7-70.7L159.3,143.3z"
                    fill="#323829"
                    onClick={managebody}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        color section
        <div style={{ marginBottom: "130px" }}>
          <button
            onClick={() => setColor("#2b010b")}
            style={{ background: "#2b010b", padding: "20px" }}
          >
            .
          </button>
          <button
            onClick={() => setColor("#fff")}
            style={{ background: "#fff", padding: "20px" }}
          >
            .
          </button>
          <button
            onClick={() => setColor("#a67d11")}
            style={{ background: "#a67d11", padding: "20px" }}
          >
            .
          </button>
          <button
            onClick={() => setColor("#313828")}
            style={{ background: "#313828", padding: "20px" }}
          >
            .
          </button>
          <button
            onClick={() => setColor("#b2d286")}
            style={{ background: "#b2d286", padding: "20px" }}
          >
            .
          </button>
          <button
            onClick={() => setColor("#bea272")}
            style={{ background: "#bea272", padding: "20px" }}
          >
            .
          </button>
        </div>
        color for body
        <div style={{ marginBottom: "130px" }}>
          <button
            onClick={() => setColorbody("#2b010b")}
            style={{ background: "#2b010b", padding: "20px" }}
          >
            .
          </button>
          <button
            onClick={() => setColorbody("#fff")}
            style={{ background: "#fff", padding: "20px" }}
          >
            .
          </button>
          <button
            onClick={() => setColorbody("#a67d11")}
            style={{ background: "#a67d11", padding: "20px" }}
          >
            .
          </button>
          <button
            onClick={() => setColorbody("#313828")}
            style={{ background: "#313828", padding: "20px" }}
          >
            .
          </button>
          <button
            onClick={() => setColorbody("#b2d286")}
            style={{ background: "#b2d286", padding: "20px" }}
          >
            .
          </button>
          <button
            onClick={() => setColorbody("#bea272")}
            style={{ background: "#bea272", padding: "20px" }}
          >
            .
          </button>
        </div>
        <div>
          
        </div>
      </div>
      <div></div>
    </>
  );
};

export default EditManModelbyUser;
