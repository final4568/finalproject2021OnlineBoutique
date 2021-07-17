import React from "react";
import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";
import "../index.css";
import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Custorderview = ({ history }) => {
  const match = useRouteMatch();
  const [orderdetails, setOrderdetails] = useState({});

  const [shirtbody, setShirtbody] = useState({});
  const [bodyid, setBodyid] =useState({});
  const [bodycolor, setBodycolor] =useState({});

  const [collers, setColler] = useState({});
  const [collerids, setCollerid] =useState({});
  const [collercolors, setCollercolor] =useState({});

  const getorderdetail = (id) =>
    fetch(`/api/oders/orderdetail/${id}`).then((res) => res.json());

  useEffect(() => {
    const fetchdetail = async () => {
      const orderdetails = await getorderdetail(match.params.id);
      setOrderdetails(orderdetails);
      console.log(orderdetails);

      setBodyid(orderdetails.bodyid);
      setShirtbody(orderdetails.shirtbody);
      setBodycolor(orderdetails.bodycolor);


      setColler(orderdetails.coller);
      setCollerid(orderdetails.collerid);
      setCollercolor(orderdetails.collercolor)
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
              <Link to="/customdress/orders">
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
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 600 800"
                  style={{ width: "400px", marginTop: "-10px" }}
                >
                  <g ids="XMLID_9_">
                    <g ide="XMLID_47_">
                      <path
                        id="Left_Arm"
                        class="st0"
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
                        id="Left_Arm"
                        class="st0"
                        d="M139.1,115.6c-24,18.3-76.7,335.1-76.7,335.1C58,466.8,63.9,477,63.9,477l-4.7,27.2
			c35.1,22.9,54.1,12.5,54.1,12.5l33.8-135.3l12.7-76l-2.5-99.9L139.1,115.6z"
                        fill="#313828"
                        stroke="#020202"
                        stroke-width="0.3"
                        stroke-miterlimit="10"
                        // onClick={() => setSelected("Left_Arm")}

                        //left arm
                      />
                    </g>
                  </g>
                  <path
                    id={bodyid}
                    class="st1"
                    d={shirtbody}
                    fill={bodycolor}
                    stroke="#020202"
                    stroke-width="0.3"
                    stroke-miterlimit="10"

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
                        // onClick={() => setSelected("Lower_Pati")}

                        //top lower patti
                      />

                      <path
                        id="Upper_Pati"
                        class="st2"
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
                    id={collerids}
                    class="st3"
                    d={collers}
                    fill={collercolors}
                    // onClick={manageColler}

                    //coller
                  />

                  <g ide="XMLID_1_">
                    <polygon
                      id="Pocket_Lower_part"
                      class="st4"
                      points="319.6,196.5 319.6,246.2 374.1,246.2 374.1,196.6 "
                      fill="#a67d11"
                    //   onClick={() => setSelected("Pocket_Lower_part")}

                      //front pocket lower part
                    />

                    <polygon
                      id="Pocket_Upper_part"
                      class="st5"
                      points="374.1,185.3 319.6,185.3 319.6,198.2 374.1,198"
                      fill="#fff"
                    //   onClick={() => setSelected("Pocket_Upper_part")}

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
                    //   onClick={() => setSelected("2nd_button")}
                    />

                    <circle
                      id="3rd_button"
                      class="st6"
                      cx="266.8"
                      cy="187.4"
                      r="4.3"
                      //button 2
                      fill="#fff"
                    //   onClick={() => setSelected("3rd_button")}
                    />

                    <circle
                      id="1st_button"
                      class="st6"
                      cx="260.3"
                      cy="137.3"
                      r="4.3"
                      //button 3
                      fill="#fff"
                    //   onClick={() => setSelected("1st_button")}
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
                        // onClick={() => setSelected("Left_Coof")}
                      />

                      <path
                        id="Right_Coof"
                        d="M59.3,504c16.1-8.1,54.1,12.5,54.1,12.5l6.2-24.6c-16.7-12.8-55.6-15.2-55.6-15.2L59.3,504z"
                        fill="#a67d11"
                        // onClick={() => setSelected("Right_Coof")}

                        //Coofright
                      />
                    </g>
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

export default Custorderview;
