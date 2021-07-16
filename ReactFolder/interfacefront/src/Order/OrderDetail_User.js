import React from "react";
import UserHeader from "../layouts/UserHeader";
import "../index.css";
import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const OrderDetail_User = ({ history }) => {
  const match = useRouteMatch();
  const [orderdetails, setOrderdetails] = useState([]);

  const getorderdetail= (id) =>
    fetch(`/api/oders/orderdetail/${id}`).then((res) => res.json());

  useEffect(() => {
    const fetchdetail = async () => {
      const orderdetails = await getorderdetail(match.params.id);
      setOrderdetails(orderdetails);
      console.log(orderdetails);
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
          <p className="order_detail">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </p>
           
          <Link to="/user/dashboard">
          <Button color="success">Go Back</Button>
          </Link>
          
          <table class="table border" style={{ marginTop: "30px", marginBottom:"60px"  }}>
            <thead>
              <tr>
                <th scope="col">
                 Customer Name: <h1>{orderdetails.name} </h1>
                </th>
                <th scope="col">
                </th>
                <th scope="col">
                <img className="ordered_img" src={`/images/${orderdetails.productimage}`} width="100%" alt="Loading..!"/>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                 
                <td><strong>Email: </strong> {orderdetails.usergmail}</td>
                <td><strong>Phone: </strong> {orderdetails.phone} </td>
                <td><strong>UserName: </strong> {orderdetails.username} </td>
              </tr>
              <tr>
                <td> <strong>Product Name: </strong>{orderdetails.productname} </td>
                <td><strong>Product Category: </strong>{orderdetails.productcategory}</td>
                <td><strong>Product Type : </strong>{orderdetails.producttype}</td>
              
              </tr>
              <tr>
                <td> <strong>Suite Quantity: </strong>{orderdetails.quantity} </td>
                <td><strong>Delivery Date: </strong>{orderdetails.clientdate}</td>
                <td><strong>Suite Size: </strong>{orderdetails.suitsize}</td>
              </tr>

              <h3 style={{color:"#ff318e", padding:"10px"}}>Shirt Size:</h3>
              <tr>
                <td> <strong>chest Size: </strong>{orderdetails.chest} </td>
                <td><strong>Shirt length : </strong>{orderdetails.shirtlength}</td>
                <td><strong>Sleeve Length : </strong>{orderdetails.sleevlength}</td>
              </tr>
              <tr>
                <td> <strong>Wholder Size: </strong>{orderdetails.sholder} </td>
                <td><strong>Overarm Size : </strong>{orderdetails.overarm}</td>
                <td><strong>Waistcoat Length : </strong>{orderdetails.waistcoatlength}</td>
              </tr>

              <tr>
                <td> <strong>Wrist Size: </strong>{orderdetails.wrist} </td>
                <td><strong>Neck Size : </strong>{orderdetails.neck}</td>
                <td><strong>Pents Length : </strong>{orderdetails.pntlength}</td>
              </tr>
              <h3 style={{color:"#ff318e", padding:"10px"}}>Pents Size:</h3>

              <tr>
              <td><strong>Pents Length : </strong>{orderdetails.pntlength}</td>
                <td><strong>Waist Size : </strong>{orderdetails.pnwaist}</td>
                <td><strong>Size From back : </strong>{orderdetails.hip}</td>
              </tr>

              <tr>
              <td><strong>Thigh Size : </strong>{orderdetails.thigh}</td>
                <td><strong>knee Size : </strong>{orderdetails.knee}</td>
                <td><strong>Legopening Size : </strong>{orderdetails.legopening}</td>
              </tr>

          
                
              

            </tbody>
            

          </table>

          <div className="AP_address">
            <p>
              <strong>Address:  </strong>{orderdetails.useraddress}
            </p>
          </div>
          

                  
        </div>
      </div>
    </>
      

  );
};

export default OrderDetail_User;
