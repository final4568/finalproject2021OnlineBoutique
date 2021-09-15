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
  const productname = "Man_Custom_Dress";
  const producttype = "Customdress";
  const [orderstatus, setOrderstatus] = useState({});
  const [orderid, setOrderid] = useState({});

  const [selected, setSelected] = useState("");
  const [data, setData] = useState({});

  const [coller, setColler] = useState(
    "M118.4,20c0,0.1,0,0.2,0,0.2l-0.2-0.7c-18.5-4.2-35.6-0.1-35.6-0.1l-1.3,2.6l0,0l-2.7,4.8c0,0,3.9,12.2,19.9,14.1c0,0,0.5-6.6-4.3-8.7c0,0-6.1-3.1-9.5-7c14.9-3.6,27.5-0.7,31.5,0.2c-3.4,4-9.7,6.8-9.7,6.8c-4.8,2.2-4.2,8.7-4.2,8.7c16.1-1.9,19.8-14,19.8-14L118.4,20z"
  );
  const [collercolor, setCollercolor] = useState("a67d11");
  const [collerid, setCollerid] = useState("coller");

  const [shirtbody, setBody] = useState(
    "M49.4,40.8l9.1-5.7l19.8-8.5c0,0,22.6-8.2,43.5,0.4c5.4,2.2,10.8,4.5,16.2,6.7c3.2,1.3,6.9,2.6,9.7,4.6c1.4,1,2.6,2.2,3.9,3.3L147,74.5l2.1,108.4l4.6,75.9c0,0-9.6,19.4-52.1,22c-42.5,2.7-59.5-22-59.5-22l9.3-87l3.8-71.8l-2.6-27.5L49.4,40.8z"
  );
  const [bodycolor, setBodycolor] = useState("313828");
  const [bodyid, setBodyid] = useState("body1");

  const [pocket, setPocket] = useState(
    "117.3,73.1 137.3,73.3 137.3,96 117.3,96 "
  );
  const [pocketcolor, setPocketcolor] = useState("red");
  const [pocketid, setPocketId] = useState("Pocket");

  const [phati, setPhati] = useState("96.8,39.6 104.3,39.6 104,96.6 96.8,96.5");
  const [phatiid, setPhatiid] = useState("Phati");
  const [phaticolor, setphatiColor] = useState("red");

  const [button, setButton] = useState("");
  const [buttoncolor, setButtoncolor] = useState("white");
  const [buttonid, setButtonId] = useState("Buttons");

  const [arm, setArm] = useState(
    "M181.2,185.1c0,0-9.3,8.1-20.1,4.5l-17.9-82.7l-66.7-0.7l-19.2,5.1l-1.3,9.4l-15.9,68.8c0,0-7,3.8-20-4.6l1.7-10.1c0,0-2.2-3.8-0.5-9.7c0,0,19.5-117.4,28.4-124.1c0,0,77.2,0.5,77.9,0.5c5.7,0,11.4-0.3,17-0.5c1.7,0-3-4.9-1.4-5c1.7,0,9.3,6,10.2,7.6c1.5,2.6,2.3,5.8,3.1,8.6c0.9,2.9,1.8,5.7,2.6,8.6c0,0,0,0.1,0,0.1l7.9,32.6l13.4,75.3l-0.9,6.7L181.2,185.1z"
  );
  const [armcolor, setArmcolor] = useState("white");
  const [armid, setArmId] = useState("Arm");

  const [leftcoff, setLeftcoff] = useState(
    "M179.7,175.7c-7.6-1.9-20.6,4.5-20.6,4.5l2,9.4c4.3-5.1,20.1-4.5,20.1-4.5L179.7,175.7z"
  );
  const [leftcoffid, setLeftcoffid] = useState("leftCoff");
  const [leftcoffcolor, setLeftcoffcolor] = useState("#a67e2d");

  const [righttcoff, setRightcoff] = useState(
    "M20.1,184.8c6-3,20,4.6,20,4.6l2.1-9.1c-6.2-4.7-20.5-5.5-20.5-5.5L20.1,184.8z"
  );
  const [righttcoffid, setRightcoffid] = useState("RightCoff");
  const [righttcoffcolor, setRightcoffcolor] = useState("#a67e2d");

  const manageColler = (e) => {
    setCollerid(e.target.getAttribute("id"));
    setCollercolor(e.target.getAttribute("fill"));
    setColler(e.target.getAttribute("d"));
    setSelected(collerid);
  };

  const setColor = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setCollercolor(color);
  };

  const managebody = (e) => {
    setBodyid(e.target.getAttribute("id"));
    setBodycolor(e.target.getAttribute("fill"));
    setBody(e.target.getAttribute("d"));
    setSelected(bodyid);
  };
  const setColorbody = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setBodycolor(color);
  };

  const managepocket = (e) => {
    setPocketId(e.target.getAttribute("id"));
    setPocketcolor(e.target.getAttribute("fill"));
    setPocket(e.target.getAttribute("points"));
    setSelected(pocketid);
  };
  const managepocketColor = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setPocketcolor(color);
  };

  const managebuttonColor = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setButtoncolor(color);
  };

  const manageArm = (e) => {
    setArmId(e.target.getAttribute("id"));
    setArmcolor(e.target.getAttribute("fill"));
    setArm(e.target.getAttribute("d"));
    setSelected(armid);
  };


  const manageArmColor = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setArmcolor(color);
  };


  const managephati = (e) => {
    setPhatiid(e.target.getAttribute("id"));
    setphatiColor(e.target.getAttribute("fill"));
    setPhati(e.target.getAttribute("points"));
    setSelected(phatiid);
  };
  const managephatiColor = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setphatiColor(color);
  };

  const manageleftcoff = (e) => {
    setLeftcoffid(e.target.getAttribute("id"));
    setLeftcoffcolor(e.target.getAttribute("fill"));
    setLeftcoff(e.target.getAttribute("d"));
    setSelected(leftcoffid);
  };
  const manageleftcoffColor = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setLeftcoffcolor(color);
  };

  const manageRightCoff = (e) => {
    setRightcoffid(e.target.getAttribute("id"));
    setRightcoffcolor(e.target.getAttribute("fill"));
    setRightcoff(e.target.getAttribute("d"));
    setSelected(righttcoffid);
  };
  const manageRightCoffcolor = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setRightcoffcolor(color);
  };

  const match = useRouteMatch();
  const [orderdetails, setOrderdetails] = useState({});

  const [sb, setSB] = useState({});
  const [bid, setBid] = useState({});
  const [bolcolr, setBocolr] = useState({});

  const [collr, setCollr] = useState({});
  const [collrid, setCollrid] = useState({});
  const [collrcolr, setCollrcolr] = useState({});

  const [pokt, setPokt] = useState({});
  const [poktid, setPoktid] = useState({});
  const [poktcolr, setPoktColr] = useState({});

  const [patis, setPatis] = useState({});
  const [patisid, setPatisid] = useState({});
  const [patiscolr, setPatiscolr] = useState({});

  const [btncolr, setBtncolr] = useState({});

  const [sarsm, setSArsm] = useState({});
  const [sarsmid, setSArsmid] = useState({});
  const [sarsmcolr, setSArsmcolr] = useState({});

  const [ltcof, setLtcof] = useState({});
  const [ltcofid, setLtcofid] = useState({});
  const [ltcofcolr, setLtcofcolr] = useState({});

  const [rtcof, setRtcof] = useState({});
  const [rtcofid, setRtcofid] = useState({});
  const [rtcofcolr, setRtcofcolr] = useState({});

  const getorderdetail = (id) =>
    fetch(`/api/oders/orderdetail/${id}`).then((res) => res.json());

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) history.push("/user/login");
    const fetchdetail = async () => {
      const orderdetails = await getorderdetail(match.params.id);
      setOrderdetails(orderdetails);
      console.log(orderdetails);
      setOrderid(orderdetails._id);

      setSB(orderdetails.shirtbody);
      setBid(orderdetails.bodyid);
      setBocolr(orderdetails.bodycolor);

      setCollr(orderdetails.coller);
      setCollrid(orderdetails.collerid);
      setCollrcolr(orderdetails.collercolor);

      setPokt(orderdetails.pocket);
      setPoktid(orderdetails.pocketid);
      setPoktColr(orderdetails.pocketcolor);

      setBtncolr(orderdetails.buttoncolor);

      setSArsm(orderdetails.arm);
      setSArsmid(orderdetails.armid);
      setSArsmcolr(orderdetails.armcolor);

      setLtcof(orderdetails.leftcoff);
      setLtcofid(orderdetails.leftcoffid);
      setLtcofcolr(orderdetails.leftcoffcolor);

      setRtcof(orderdetails.righttcoff);
      setRtcofid(orderdetails.righttcoffid);
      setRtcofcolr(orderdetails.righttcoffcolor);

      setPatis(orderdetails.phati);
      setPatisid(orderdetails.phatiid);
      setPatiscolr(orderdetails.phaticolor);
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
      const body = {
        productname,
        producttype,
        collerid,
        collercolor,
        shirtbody,
        bodyid,
        bodycolor,
        coller,
        shirtbody,
        pocket,
        pocketcolor,
        pocketid,
        pocket,
        pocketid,
        pocketcolor,
        arm,
        armcolor,
        armid,
        buttoncolor,
        phati,
        phatiid,
        phaticolor,
        buttoncolor,
        leftcoff,
        leftcoffid,
        leftcoffcolor,
        righttcoff,
        righttcoffid,
        righttcoffcolor,
        orderstatus: "SUBMITTED",
      };
      await fetch(`/api/oders/orderUpdate/${match.params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      alert("Your Dress Cutomized Successfully");
      history.puch("/customdress/allorderbyuser");
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

      <div className="container-fluide" style={{ padding: "10px" }}>
        <div className="row">
          <div
            className="col-lg-6"
            id="svgcol_right"
            style={{ paddingRight: "20px" }}
          >
            <div className="row">
              <div className="col-lg-6">
                previous design
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 200 300"
                  style={{
                    enableBackground: "new 0 0 200 300",
                    width: "300px",
                    marginTop: "-10px",
                  }}
                  xmlSpace="preserve"
                >
                  <g id="XMLID_7_">
                    <g id="XMLID_9_">
                      <g id="XMLID_37_">
                        <path
                          id={sarsmid}
                          class="st0"
                          d={sarsm}
                          opacity="0.99"
                          fill={sarsmcolr}
                          stroke="black"
                          stroke-width="0.09"
                          stroke-miterlimit="3"
                          // Both Arms
                        />
                      </g>
                    </g>

                    <path
                      id={bid}
                      class="st1"
                      d={sb}
                      fill={bolcolr}
                      stroke="black"
                      stroke-width="0.1"
                      stroke-miterlimit="10"
                      //body
                    />

                    <polygon
                      id={patisid}
                      class="st2"
                      points={patis}
                      fill={patiscolr}
                      stroke="black"
                      stroke-width="0.1"
                      stroke-miterlimit="10"

                      //phati
                    />

                    <g id="v" fill={btncolr}>
                      <path
                        id="button1"
                        class="st2"
                        d="M98.8,51.6c0,0,0.1-1.3,1.5-1.4c0,0,1-0.1,1.5,1c0,0,0.4,0.7-0.2,1.7c0,0-0.7,0.8-1.7,0.5
                  C99.8,53.4,98.7,53,98.8,51.6z"
                        fill={btncolr}
                      />

                      <path
                        id="button2"
                        class="st2"
                        d="M98.6,61.1c0,0,0.1-1.3,1.5-1.4c0,0,1-0.1,1.5,1c0,0,0.4,0.7-0.2,1.7c0,0-0.7,0.8-1.7,0.5
                  C99.6,62.8,98.5,62.4,98.6,61.1z"
                        fill={btncolr}
                      />
                      <path
                        id="button3"
                        class="st2"
                        d="M99.1,71.1c0,0,0.1-1.3,1.5-1.4c0,0,1-0.1,1.5,1c0,0,0.4,0.7-0.2,1.7c0,0-0.7,0.8-1.7,0.5
                  C100.1,72.8,99,72.4,99.1,71.1z"
                        fill={btncolr}
                      />

                      {/* //buttons */}
                    </g>

                    <g id="XMLID_6_">
                      <path
                        id={ltcofid}
                        class="st5"
                        d={ltcof}
                        // left Coff
                        fill={ltcofcolr}
                        stroke="black"
                        stroke-width="0.07"
                        stroke-miterlimit="3"
                      />
                      <path
                        id={rtcofid}
                        class="st5"
                        d={rtcof}
                        // Right Coff
                        fill={rtcofcolr}
                        stroke="black"
                        stroke-width="0.07"
                        stroke-miterlimit="3"
                      />
                    </g>

                    <path
                      id={collrid}
                      class="st2"
                      d={collr}
                      fill={collrcolr}
                      stroke="black"
                      stroke-width="0.1"
                      stroke-miterlimit="10"

                      // ban
                    />
                  </g>
                  <polygon
                    class="st7"
                    id={poktid}
                    class="st5"
                    fill={poktcolr}
                    points={pokt}
                    stroke="black"
                    stroke-width="0.07"
                    stroke-miterlimit="3"
                  />
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
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 200 300"
                  style={{
                    enableBackground: "new 0 0 200 300",
                    width: "300px",
                    marginTop: "-10px",
                  }}
                  xmlSpace="preserve"
                >
                  <g id="XMLID_7_">
                    <g id="XMLID_9_">
                      <g id="XMLID_37_">
                        <path
                          id={armid}
                          class="st0"
                          d={arm}
                          opacity="0.99"
                          fill="#313828"
                          stroke="black"
                          stroke-width="0.09"
                          stroke-miterlimit="3"
                          onClick={manageArm}
                          // Both Arms
                        />
                      </g>
                    </g>

                    <path
                      id={bodyid}
                      class="st1"
                      d={shirtbody}
                      onClick={managebody}
                      fill="#323829"
                      stroke="black"
                      stroke-width="0.1"
                      stroke-miterlimit="10"
                      //body
                    />

                    <polygon
                      id={phatiid}
                      class="st2"
                      points={phati}
                      fill="#A67E2D"
                      stroke="black"
                      stroke-width="0.1"
                      stroke-miterlimit="10"
                      onClick={managephati}

                      //phati
                    />

                    <g id="v" fill="white">
                      <path
                        id="button1"
                        class="st2"
                        d="M98.8,51.6c0,0,0.1-1.3,1.5-1.4c0,0,1-0.1,1.5,1c0,0,0.4,0.7-0.2,1.7c0,0-0.7,0.8-1.7,0.5
                  C99.8,53.4,98.7,53,98.8,51.6z"
                        onClick={(e) => {
                          setSelected(e.target.id);
                        }}
                      />

                      <path
                        id="button2"
                        class="st2"
                        d="M98.6,61.1c0,0,0.1-1.3,1.5-1.4c0,0,1-0.1,1.5,1c0,0,0.4,0.7-0.2,1.7c0,0-0.7,0.8-1.7,0.5
                  C99.6,62.8,98.5,62.4,98.6,61.1z"
                        onClick={(e) => {
                          setSelected(e.target.id);
                        }}
                      />
                      <path
                        id="button3"
                        class="st2"
                        d="M99.1,71.1c0,0,0.1-1.3,1.5-1.4c0,0,1-0.1,1.5,1c0,0,0.4,0.7-0.2,1.7c0,0-0.7,0.8-1.7,0.5
                  C100.1,72.8,99,72.4,99.1,71.1z"
                        onClick={(e) => {
                          setSelected(e.target.id);
                        }}
                      />

                      {/* //buttons */}
                    </g>

                    <g id="XMLID_6_">
                      <path
                        id={leftcoffid}
                        class="st5"
                        d={leftcoff}
                        // left Coff
                        fill="#A67E2D"
                        stroke="black"
                        stroke-width="0.07"
                        stroke-miterlimit="3"
                        onClick={manageleftcoff}
                      />
                      <path
                        id={righttcoffid}
                        class="st5"
                        d={righttcoff}
                        // Right Coff
                        fill="#A67E2D"
                        stroke="black"
                        stroke-width="0.07"
                        stroke-miterlimit="3"
                        onClick={manageRightCoff}
                      />
                    </g>

                    <path
                      id={collerid}
                      class="st2"
                      d={coller}
                      fill="#A67E2D"
                      stroke="black"
                      stroke-width="0.1"
                      stroke-miterlimit="10"
                      onClick={manageColler}

                      // ban
                    />
                  </g>
                  <polygon
                    class="st7"
                    id={pocketid}
                    class="st5"
                    fill="#A67E2D"
                    points={pocket}
                    onClick={managepocket}
                    stroke="black"
                    stroke-width="0.07"
                    stroke-miterlimit="3"
                  />
                </svg>
                <button
                  style={{
                    marginBottom: "0px",
                    float: "right",
                    background: "green",
                    marginTop: "100px",
                    color: "#fff",
                    padding: "10px 20px 10px 20px",
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
                      marginRight: "20px",
                      float: "right",
                      background: "green",
                      marginTop: "100px",
                      color: "#fff",
                      padding: "10px 20px 10px 20px",

                      borderRadius: "5px",
                    }}
                  >
                    Change Size
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              style={{
                fontWeight: 800,
                color: "green",
                border: "1px solid gray",
                borderRadius: "5px",
                padding: "20px",
                overflow: "scroll",
                height: "600px",
                marginBottom: "100px",
              }}
            >
              <h3>
                {" "}
                <strong> Style Your Dresses</strong>
              </h3>
              <br />
              <br />

              <strong style={{ color: "Black", marginTop: "20px" }}>
                Collers Styles
              </strong>
              <div
                className="collers_class"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "10px",
                }}
              >
                {/* first coller */}
                <div className="svg_part">
                  <svg style={{ width: "100px", height: "100px" }}>
                    <path
                      id="Coller1"
                      class="st0"
                      d="M125.2,28.1c0,0,0.1,0,0.1,0l-3.6-8.8c0,0-15.5-8-43-0.4l-3.3,9.4l12.3,30.4l11.6-18.5
                       l-14.5-15c7-1.7,17.2-2.8,31.3,0.3l-14.1,14.9l11.2,18.6l12.3-30.4L125.2,28.1z"
                      fill="#323829"
                      transform="translate(-50, 10)"
                      onClick={manageColler}
                    />
                  </svg>
                </div>

                {/* 2nd coller */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <path
                    id="Coller2"
                    class="st0"
                    d="M118.4,20c0,0.1,0,0.2,0,0.2l-0.2-0.7c-18.5-4.2-35.6-0.1-35.6-0.1l-1.3,2.6l0,0l-2.7,4.8c0,0,3.9,12.2,19.9,14.1c0,0,0.5-6.6-4.3-8.7c0,0-6.1-3.1-9.5-7c14.9-3.6,27.5-0.7,31.5,0.2c-3.4,4-9.7,6.8-9.7,6.8c-4.8,2.2-4.2,8.7-4.2,8.7c16.1-1.9,19.8-14,19.8-14L118.4,20z"
                    transform="translate(-50, 20)"
                    fill="#323829"
                    onClick={manageColler}
                  />
                </svg>

                {/* 3rd coller */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <path
                    id="Coller3"
                    class="st0"
                    d="M118.4,20c0,0.1,0,0.2,0,0.2l-0.2-0.7c-18.5-4.2-35.6-0.1-35.6-0.1l-1.3,2.6l0,0l-2.7,4.8c0,0,3.9,12.2,19.9,14.1c0,0,0.5-6.6-4.3-8.7c0,0-6.1-3.1-9.5-7c14.9-3.6,27.5-0.7,31.5,0.2c-3.4,4-9.7,6.8-9.7,6.8c-4.8,2.2-4.2,8.7-4.2,8.7c16.1-1.9,19.8-14,19.8-14L118.4,20z"
                    transform="translate(-50, 20)"
                    fill="#323829"
                    onClick={manageColler}
                  />
                </svg>
              </div>

              {/* color for coller */}
              <strong
                style={{ color: "Black", marginTop: "20px", float: "right" }}
              >
                Select Color For Collers
              </strong>
              <div className="Coller_color" style={{ marginTop: "50px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() => setColor("#2b010b")}
                    style={{
                      background: "#2b010b",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColor("#fff")}
                    style={{
                      background: "#fff",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColor("#a67d11")}
                    style={{
                      background: "#a67d11",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColor("#313828")}
                    style={{
                      background: "#313828",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColor("#b2d286")}
                    style={{
                      background: "#b2d286",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColor("#bea272")}
                    style={{
                      background: "#bea272",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                </div>
              </div>

              <strong style={{ color: "Black", marginTop: "100px" }}>
                Body Style
              </strong>
              <div
                className="Body_class"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "10px",
                }}
              >
                {/* first body */}
                <div>
                  <svg
                    className="svg_part"
                    style={{ width: "100px", height: "100px", margin: "5px" }}
                  >
                    <path
                      id="body1"
                      class="st1"
                      d="M49.4,40.8l9.1-5.7l19.8-8.5c0,0,22.6-8.2,43.5,0.4c5.4,2.2,10.8,4.5,16.2,6.7c3.2,1.3,6.9,2.6,9.7,4.6c1.4,1,2.6,2.2,3.9,3.3L147,74.5l2.1,108.4l4.6,75.9c0,0-9.6,19.4-52.1,22c-42.5,2.7-59.5-22-59.5-22l9.3-87l3.8-71.8l-2.6-27.5L49.4,40.8z"
                      fill="#323829"
                      transform="translate(-50, 20)"
                      onClick={managebody}
                    />
                  </svg>
                </div>

                {/* 2nd body */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <g>
                    <path
                      id="body2"
                      class="st1"
                      d="M49.4,40.8l9.1-5.7l19.8-8.5c0,0,22.6-8.2,43.5,0.4c5.4,2.2,10.8,4.5,16.2,6.7
                    c3.2,1.3,6.9,2.6,9.7,4.6c1.4,1,2.6,2.2,3.9,3.3L147,74.5l2.1,108.4l4.6,75.9H42.1l9.3-87l3.8-71.8l-2.6-27.5L49.4,40.8z"
                      fill="#323829"
                      transform="translate(-50, 20)"
                      onClick={managebody}
                    />
                  </g>
                </svg>

                {/* 3rd body */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <g>
                    <path
                      id="body3"
                      class="st1"
                      d="M153.7,258.8h-0.8c-15.9-11-35.1-17.3-55.8-17.3c-20.3,0-39.2,6.1-54.9,16.7l9.2-86.4l3.8-71.8
                    l-2.6-27.5l-3.2-31.6l9.1-5.7l19.8-8.5c0,0,22.6-8.2,43.5,0.4c5.4,2.2,10.8,4.5,16.2,6.7c3.2,1.3,6.9,2.6,9.7,4.6
                    c1.4,1,2.6,2.2,3.9,3.3l-4.7,33L149,183L153.7,258.8z"
                      fill="#323829"
                      transform="translate(-50, 20)"
                      onClick={managebody}
                    />
                  </g>
                </svg>
              </div>

              {/* color for coller */}
              <strong
                style={{ color: "Black", marginTop: "20px", float: "right" }}
              >
                Select Color For Body
              </strong>
              <div className="Coller_color" style={{ marginTop: "50px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() => setColorbody("#2b010b")}
                    style={{
                      background: "#2b010b",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColorbody("#fff")}
                    style={{
                      background: "#fff",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColorbody("#a67d11")}
                    style={{
                      background: "#a67d11",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColorbody("#313828")}
                    style={{
                      background: "#313828",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColorbody("#b2d286")}
                    style={{
                      background: "#b2d286",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColorbody("#bea272")}
                    style={{
                      background: "#bea272",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                </div>
              </div>

              <strong style={{ color: "Black", marginTop: "100px" }}>
                Pocket Style
              </strong>
              <div
                className="Body_class"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "10px",
                }}
              >
                {/* first pocket */}
                <div>
                  <svg
                    className="svg_part"
                    style={{ width: "100px", height: "100px", margin: "5px" }}
                  >
                    <polygon
                      id="Pocket_1"
                      class="st4"
                      points="116,73 125.9,77.9 136,73.1 136.2,96 115.8,95.8 "
                      transform="translate(-75, -30)"
                      onClick={managepocket}
                    />
                  </svg>
                </div>

                {/* 2nd pocket */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <polygon
                    id="Pocket_2"
                    class="st4"
                    points="117.3,73.1 137.3,73.3 137.3,96 117.3,96 "
                    transform="translate(-75, -30)"
                    onClick={managepocket}
                  />
                </svg>

                {/* 3rd pocket */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <polygon
                    id="Pocket_3"
                    class="st4"
                    points="120.9,95.9 120.9,81 120,81 120,95.9 119.5,95.9 119.5,81.3 118.6,81.3 118.6,95.8 
	            115.8,95.8 116,73 125.5,73.1 136,73.1 136.2,96 "
                    transform="translate(-75, -30)"
                    onClick={managepocket}
                  />
                </svg>
              </div>

              {/* color for Pocket */}
              <strong
                style={{ color: "Black", marginTop: "20px", float: "right" }}
              >
                Select Color For Pocket
              </strong>
              <div className="Coller_color" style={{ marginTop: "50px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() => managepocketColor("#2b010b")}
                    style={{
                      background: "#2b010b",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => managepocketColor("#fff")}
                    style={{
                      background: "#fff",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => managepocketColor("#a67d11")}
                    style={{
                      background: "#a67d11",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => managepocketColor("#313828")}
                    style={{
                      background: "#313828",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => managepocketColor("#b2d286")}
                    style={{
                      background: "#b2d286",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => managepocketColor("#bea272")}
                    style={{
                      background: "#bea272",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                </div>
              </div>

              <strong style={{ color: "Black", marginTop: "100px" }}>
                Phati Style
              </strong>
              <div
                className="Body_class"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "10px",
                }}
              >
                {/* first phati */}
                <div>
                  <svg
                    className="svg_part"
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "5px",
                      color: "red",
                    }}
                  >
                    <polygon
                      id="Phati_1"
                      class="st6"
                      points="96.8,39.6 104.4,39.6 103.9,96.3 100.3,103 96.6,96.4"
                      transform="translate(-50, -30)"
                      fill="#323829"
                      onClick={managephati}
                    />
                  </svg>
                </div>

                {/* 2nd phati */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <polygon
                    id="Phati_2"
                    class="st6"
                    points="96.8,39.6 104.3,39.6 104,107.2 96.3,112.3 	"
                    fill="#323829"
                    transform="translate(-50, -30)"
                    onClick={managephati}
                  />
                </svg>

                <svg
                  className="svg_part"
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: "5px",
                    color: "red",
                  }}
                >
                  <polygon
                    id="Phati_3"
                    class="st6"
                    points="96.8,39.6 104.3,39.6 104,96.6 96.8,96.5"
                    transform="translate(-50, -30)"
                    fill="#323829"
                    onClick={managephati}
                  />
                </svg>
              </div>

              {/* color for Phati */}
              <strong
                style={{ color: "Black", marginTop: "20px", float: "right" }}
              >
                Select Color For Phati
              </strong>
              <div className="Coller_color" style={{ marginTop: "50px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() => managephatiColor("#2b010b")}
                    style={{
                      background: "#2b010b",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => managephatiColor("#fff")}
                    style={{
                      background: "#fff",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => managephatiColor("#a67d11")}
                    style={{
                      background: "#a67d11",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => managephatiColor("#313828")}
                    style={{
                      background: "#313828",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => managephatiColor("#b2d286")}
                    style={{
                      background: "#b2d286",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => managephatiColor("#bea272")}
                    style={{
                      background: "#bea272",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                </div>
              </div>

              <div
                className="container"
                style={{ marginTop: "30px", float: "left", clear: "both" }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="Body_class"
                      style={{
                        display: "flex",
                        justifyContent: "right",
                        marginTop: "10px",
                      }}
                    >
                      {/* first phati */}
                 
                    </div>

                    <strong>Select Arm Color</strong>

                    <div
                      className="Coller_color"
                      style={{
                        marginTop: "10px",
                        float: "left",
                        marginBottom: "40px",
                      }}
                    >
                      <div style={{ marginBottom: "10px" }}>
                        <button
                          onClick={() => manageArmColor("#2b010b")}
                          style={{
                            background: "#2b010b",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageArmColor("#fff")}
                          style={{
                            background: "#fff",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageArmColor("#a67d11")}
                          style={{
                            background: "#a67d11",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageArmColor("#313828")}
                          style={{
                            background: "#313828",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageArmColor("#b2d286")}
                          style={{
                            background: "#b2d286",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageArmColor("#bea272")}
                          style={{
                            background: "#bea272",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <strong>Select Button Color</strong>

                    <div
                      className="Coller_color"
                      style={{ marginTop: "10px", float: "left" }}
                    >
                      <div style={{ marginBottom: "10px" }}>
                        <button
                          onClick={() => managebuttonColor("#2b010b")}
                          style={{
                            background: "#2b010b",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => managebuttonColor("#fff")}
                          style={{
                            background: "#fff",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => managebuttonColor("#a67d11")}
                          style={{
                            background: "#a67d11",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => managebuttonColor("#313828")}
                          style={{
                            background: "#313828",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => managebuttonColor("#b2d286")}
                          style={{
                            background: "#b2d286",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => managebuttonColor("#bea272")}
                          style={{
                            background: "#bea272",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                      </div>
                    </div>
                  </div>
                  <br className="cls" />
                </div>
              </div>

              <div className="container" style={{ marginTop: "210px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <strong>Left Coff</strong>

                    <div
                      className="Body_class"
                      style={{
                        display: "flex",
                        justifyContent: "right",
                        marginTop: "10px",
                      }}
                    >
                      {/* first left coff */}
                      <div>
                        <svg
                          className="svg_part"
                          style={{
                            width: "100px",
                            height: "100px",
                            margin: "5px",
                          }}
                        >
                          <path
                            id="LeftCoof_2"
                            class="st4"
                            d="M180.3,180c-7.6-1.9-20.5,3.6-20.5,3.6l1.3,6.1c4.3-5.1,20.1-4.5,20.1-4.5L180.3,180z"
                            transform="translate(-110, -130)"
                            onClick={manageleftcoff}
                            fill="#A67E2D"
                            stroke="black"
                            stroke-width="0.07"
                            stroke-miterlimit="3"
                          />
                        </svg>

                        {/* 2nd left coff*/}

                        <svg
                          className="svg_part"
                          style={{
                            width: "100px",
                            height: "100px",
                            margin: "5px",
                            color: "red",
                          }}
                        >
                          <g id="XMLID_6_">
                            <path
                              id="leftcoff_1"
                              class="st5"
                              d="M179.7,175.7c-7.6-1.9-20.6,4.5-20.6,4.5l2,9.4c4.3-5.1,20.1-4.5,20.1-4.5L179.7,175.7z"
                              // left Coff
                              fill="#A67E2D"
                              stroke="black"
                              stroke-width="0.07"
                              stroke-miterlimit="3"
                              transform="translate(-120, -130)"
                              onClick={manageleftcoff}
                            />
                          </g>
                        </svg>
                      </div>
                    </div>

                    <strong style={{ marginBottom: "20px", marginTop: "20px" }}>
                      Select Color For left Coff
                    </strong>

                    <div
                      //Left Coff Color

                      className="leftCoff_color"
                      style={{ marginTop: "10px", float: "left" }}
                    >
                      <div style={{ marginBottom: "10px" }}>
                        <button
                          onClick={() => manageleftcoffColor("#2b010b")}
                          style={{
                            background: "#2b010b",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageleftcoffColor("#fff")}
                          style={{
                            background: "#fff",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageleftcoffColor("#a67d11")}
                          style={{
                            background: "#a67d11",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageleftcoffColor("#313828")}
                          style={{
                            background: "#313828",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageleftcoffColor("#b2d286")}
                          style={{
                            background: "#b2d286",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageleftcoffColor("#bea272")}
                          style={{
                            background: "#bea272",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <strong>Right Coff</strong>

                    <div
                      className="Body_class"
                      style={{
                        display: "flex",
                        justifyContent: "right",
                        marginTop: "10px",
                      }}
                    >
                      {/* first Right coff */}
                      <div>
                        <svg
                          className="svg_part"
                          style={{
                            width: "100px",
                            height: "100px",
                            margin: "5px",
                          }}
                        >
                          <path
                            id="RightCoof_2"
                            class="st4"
                            d="M20.1,184.8c6-3,20,4.6,20,4.6l1.1-4.8c-6.2-4.7-20.2-5.4-20.2-5.4L20.1,184.8z"
                            transform="translate(20, -130)"
                            onClick={manageRightCoff}
                            fill="#A67E2D"
                            stroke="black"
                            stroke-width="0.07"
                            stroke-miterlimit="3"
                          />
                        </svg>

                        {/* 2nd Right coff*/}

                        <svg
                          className="svg_part"
                          style={{
                            width: "100px",
                            height: "100px",
                            margin: "5px",
                            color: "red",
                          }}
                        >
                          <g id="XMLID_6_">
                            <path
                              id="RightCoof_1"
                              class="st5"
                              d="M20.1,184.8c6-3,20,4.6,20,4.6l2.1-9.1c-6.2-4.7-20.5-5.5-20.5-5.5L20.1,184.8z"
                              // left Coff
                              fill="#A67E2D"
                              stroke="black"
                              stroke-width="0.07"
                              stroke-miterlimit="3"
                              transform="translate(20, -130)"
                              onClick={manageRightCoff}
                            />
                          </g>
                        </svg>
                      </div>
                    </div>

                    <strong style={{ marginBottom: "20px", marginTop: "20px" }}>
                      Select Color For Right Coff
                    </strong>

                    <div
                      //Left Coff Color

                      className="leftCoff_color"
                      style={{ marginTop: "10px", float: "left" }}
                    >
                      <div style={{ marginBottom: "10px" }}>
                        <button
                          onClick={() => manageRightCoffcolor("#2b010b")}
                          style={{
                            background: "#2b010b",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageRightCoffcolor("#fff")}
                          style={{
                            background: "#fff",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageRightCoffcolor("#a67d11")}
                          style={{
                            background: "#a67d11",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageRightCoffcolor("#313828")}
                          style={{
                            background: "#313828",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageRightCoffcolor("#b2d286")}
                          style={{
                            background: "#b2d286",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                        <button
                          onClick={() => manageRightCoffcolor("#bea272")}
                          style={{
                            background: "#bea272",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          .
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default EditManModelbyUser;
