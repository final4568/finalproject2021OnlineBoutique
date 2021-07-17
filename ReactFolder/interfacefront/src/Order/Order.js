import axios from "axios";
import "../index.css";
import { useState, useEffect } from "react";

const Order = ({history}) => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {    
      const loadorders = async () => {
        const result = await axios.get("/api/oders/seeorder");
        setOrders(result.data);
      };
  
      loadorders();
    }, [history]);  
  return ( 
        <>
        <div className="container" style={{marginTop:"30px", marginBottom:"50px"}}>
        <table class="table border shadow" style={{ marginTop: "40px" }}>
            <thead>
              <tr class="table-dark">
                <th scope="col">Products Name</th>
                <th scope="col">UserName </th>
                <th scope="col">Handle Tailor </th>
                <th scope="col">Product Type </th>
                <th scope="col">Progress Status </th>
                <th scope="col">Order Status </th>

              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                 
                  <td>{order.productname}</td>
                  <td>{order.username}</td>
                  <td><strong>{order.tailortype} </strong></td>                  
                  <td>{order.producttype}</td>                  
                  <td><strong>{order.orderprogress} </strong></td>          
                  <td><strong>{order.orderstatus} </strong></td>          
                       
                </tr>
              ))}
            </tbody>
          </table>
          </div>
<div className="container">
    <p style={{
        fontStyle:"italic",
        color:"#ff318e",
        textAlign:"right"
    }}>Developed By Group 10</p>
</div>
        </>
     );
}
 
export default Order;