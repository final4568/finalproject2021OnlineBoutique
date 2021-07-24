import React from "react";
import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";
import "../index.css";
import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const FemleCustorderview_admin = ({ history }) => {
  const match = useRouteMatch();
  const [orderdetails, setOrderdetails] = useState({});

  const [sb, setSB] = useState({});
  const [bid, setBid] =useState({});
  const [bolcolr, setBocolr] =useState({});

  const [collr, setCollr] = useState({});
  const [collrid, setCollrid] =useState({});
  const [collrcolr, setCollrcolr] =useState({});
  
  const [arms, setArms] = useState({});
  const [armsid, setArmsid] = useState({});
  const [armscolr, setArmscolr] = useState({});


  


  const getorderdetail = (id) =>
    fetch(`/api/oders/orderdetail/${id}`).then((res) => res.json());

  useEffect(() => {
    const fetchdetail = async () => {
      const orderdetails = await getorderdetail(match.params.id);
      setOrderdetails(orderdetails);
      
      setSB(orderdetails.shirtbody);
      setBid(orderdetails.bodyid);
      setBocolr(orderdetails.bodycolor);

      setCollr(orderdetails.coller);
      setCollrid(orderdetails.collerid);
      setCollrcolr(orderdetails.collercolor);

      setArms(orderdetails.arm);
      setArmsid(orderdetails.armid);
      setArmscolr(orderdetails.armcolor);


    };
    fetchdetail();
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
          <h1>Order Details</h1>
    
          <p className="order_detail">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </p>

          

          <div className="container">
            <div className="row">
              <div className="col-lg-8">
              <Link to="/Femalecustomdress/orders">
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
                        <strong>Coller Color :  </strong>{orderdetails.collercolor}
                        <div
                       
                          style={{
                            background: orderdetails.collercolor,
                            height: "20px",
                            width: "20px",
                            border:"1px solid black",
                            borderRadius:"2px"
                          }}
                        ></div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <strong>Body Color : </strong>{orderdetails.bodycolor}
                        <div
                          style={{
                            backgroundColor: orderdetails.bodycolor,
                            height: "20px",
                            width: "20px",
                            border:"1px solid black",
                            borderRadius:"2px"
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
                    id={collrid}
                    class="st2"
                    points={collr}
                    fill={collrcolr}
                    stroke="black"
                    stroke-width="0.1"
                    stroke-miterlimit="10"

                    // ban
                  />
                </g>
              </svg>




              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default FemleCustorderview_admin;
