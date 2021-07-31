import React from "react";
import UserHeader from "../layouts/UserHeader";
import "../index.css";
import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const OrderViewByuser = ({ history }) => {
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

  const [arms, setArms] = useState({});
  const [armsid, setArmsid] = useState({});
  const [armscolr, setArmscolr] = useState({});

  const [ltcof, setLtcof] = useState({});
  const [ltcofid, setLtcofid] = useState({});
  const [ltcofcolr, setLtcofcolr] = useState({});

  const [rtcof, setRtcof] = useState({});
  const [rtcofid, setRtcofid] = useState({});
  const [rtcofcolr, setRtcofcolr] = useState({});

  const getorderdetail = (id) =>
    fetch(`/api/oders/orderdetail/${id}`).then((res) => res.json());

  useEffect(() => {
    const fetchdetail = async () => {
      const orderdetails = await getorderdetail(match.params.id);
      setOrderdetails(orderdetails);
      console.log(orderdetails);

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

      setArms(orderdetails.arm);
      setArmsid(orderdetails.armid);
      setArmscolr(orderdetails.armcolor);

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

  return (
    <>
      <UserHeader />
      <div className="containter">
        <div
          className="col-12"
          id="right_dasBoard_col"
          style={{ float: "right" }}
        >
          <h1>Order Details</h1>
          {/* <p>
            <strong> colloer</strong> : {coller}
          </p>
          <p>
            <strong> body</strong> : {shirtbody}
          </p> */}
          <p className="order_detail">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </p>

          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <Link to="/customdress/allorderbyuser">
                  <Button color="success">Go Back</Button>
                </Link>

                <table
                  class="table border"
                  style={{ marginTop: "30px", marginBottom: "60px" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">
                        Customer Name: <h1>{orderdetails.name} </h1>
                      </th>
                      <th scope="col"></th>
                      {/* <th scope="col"> Email:{tailors.email}</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Email: </strong> {orderdetails.usergmail}
                      </td>
                      <td>
                        <strong>Phone: </strong> {orderdetails.phone}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <strong>Product Name: </strong>
                        {orderdetails.productname}{" "}
                      </td>
                      <td>
                        <strong>Product Category: </strong>
                        {orderdetails.productcategory}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <strong>Suite Quantity: </strong>
                        {orderdetails.quantity}{" "}
                      </td>
                      <td>
                        <strong>Delivery Date: </strong>
                        {orderdetails.clientdate}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <strong>User Name :</strong>
                        {orderdetails.username}
                      </td>
                      <td>
                        {" "}
                        <strong>Product Type :</strong>
                        {orderdetails.producttype}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <strong>User Name :</strong> {orderdetails.username}
                      </td>
                      <td>
                        {" "}
                        <strong>Product Type :</strong>{" "}
                        {orderdetails.producttype}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Suite Size: </strong>
                        {orderdetails.suitsize}
                      </td>
                    </tr>

                    <h3 style={{ color: "#ff318e", padding: "10px" }}>
                      Shirt Size:
                    </h3>
                    <tr>
                      <td>
                        {" "}
                        <strong>chest Size: </strong>
                        {orderdetails.chest}{" "}
                      </td>
                      <td>
                        <strong>Shirt length : </strong>
                        {orderdetails.shirtlength}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Sleeve Length : </strong>
                        {orderdetails.sleevlength}
                      </td>
                      <td>
                        {" "}
                        <strong>Wholder Size: </strong>
                        {orderdetails.sholder}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Overarm Size : </strong>
                        {orderdetails.overarm}
                      </td>
                      <td>
                        <strong>Waistcoat Length : </strong>
                        {orderdetails.waistcoatlength}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <strong>Wrist Size: </strong>
                        {orderdetails.wrist}{" "}
                      </td>
                      <td>
                        <strong>Neck Size : </strong>
                        {orderdetails.neck}
                      </td>
                    </tr>
                    <h3 style={{ color: "#ff318e", padding: "10px" }}>
                      Pents Size:
                    </h3>

                    <tr>
                      <td>
                        <strong>Pents Length : </strong>
                        {orderdetails.pntlength}
                      </td>
                      <td>
                        <strong>Waist Size : </strong>
                        {orderdetails.pnwaist}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Size From back : </strong>
                        {orderdetails.hip}
                      </td>
                      <td>
                        <strong>Thigh Size : </strong>
                        {orderdetails.thigh}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>knee Size : </strong>
                        {orderdetails.knee}
                      </td>
                      <td>
                        <strong>Legopening Size : </strong>
                        {orderdetails.legopening}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Thigh Size : </strong>
                        {orderdetails.thigh}
                      </td>
                      <td>
                        <strong>knee Size : </strong>
                        {orderdetails.knee}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Legopening Size : </strong>
                        {orderdetails.legopening}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Collerid : </strong>
                        {orderdetails.collerid}
                      </td>
                      <td>
                        <strong>Coller Color : </strong>
                        {orderdetails.collercolor}
                        <div
                          style={{
                            background: orderdetails.collercolor,
                            height: "20px",
                            width: "20px",
                            border: "1px solid black",
                            borderRadius: "2px",
                          }}
                        ></div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Body Color : </strong>
                        {orderdetails.bodycolor}
                        <div
                          style={{
                            backgroundColor: orderdetails.bodycolor,
                            height: "20px",
                            width: "20px",
                            border: "1px solid black",
                            borderRadius: "2px",
                          }}
                        ></div>
                      </td>

                      <td>
                        <strong>Body : </strong>
                        {orderdetails.bodyid}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="AP_address">
                  <p>
                    <strong>Address: </strong>
                    {orderdetails.useraddress}
                  </p>
                </div>
              </div>

              <div className="col-lg-4" style={{ marginTop: "30px" }}>
                {/* right COlumn */}

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
                    width: "400px",
                    marginTop: "-10px",
                  }}
                  xmlSpace="preserve"
                >
                  <g id="XMLID_7_">
                    <g id="XMLID_9_">
                      <g id="XMLID_37_">
                        <path
                          id={armsid}
                          class="st0"
                          d={arms}
                          opacity="0.99"
                          fill={armscolr}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderViewByuser;

// export default OrderViewByuser;
