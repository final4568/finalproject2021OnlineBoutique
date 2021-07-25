import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Button } from "reactstrap";
import {Link } from "react-router-dom"
import axios from "axios";
import UserHeader from "../layouts/UserHeader";

const UserOrders = () => {
   const[userid, setUserID] = useState([]);
   const[orders, setOrder]= useState([]);
   const[error, setError]= useState([]);
   const [refresh, setRefresh] = useState(false);

   useEffect(()=>{
    if (refresh) return setRefresh(false);
    const token = localStorage.getItem("authToken");

    const LoggedUserdata = async()=>{
      const config = {
        headers:{
          "Content-type":"application/json",
          Authorization: `Bearer ${token}`,
        }
      };      
      try{
        const { data } = await axios.get(
          "/api/users/LoggedUserProfile",
          config
        );
        setUserID(data._id);
      }catch(err){
        setError("user not find")
      }
    };


    const getordersbyuser = async()=>{
      const configg = {
        headers:{
            "Content-Type" : "application/json",
        },
    };
    try{
      const { data } = await axios.post('/api/oders/orderbyUserid',{userid}, configg);
     console.log(data.data)
     
      setOrder(data);
    }catch(error){
      setError("not Fetch Data")      
    }

  };
    LoggedUserdata();
    getordersbyuser();
    
   },[refresh, userid]);

    // const deleteorder =(id)=>{
    // axios.delete(`/api/oders/deleteorder/${id}`);
    // setRefresh(true)
    // };

    const refresher =()=>{
      setRefresh(true)
    };
  return ( 
        <>
         <table class="table border shadow" style={{ marginTop: "40px" }}>
            <thead>
              <tr class="table-dark">
                <th scope="col">Order Type</th>
                <th scope="col">Product Name</th>
                <th scope="col">Order Status</th>
                <th scope="col">Progress</th>
                <th scope="col">Submitted To</th>
                <th scope="col">User Name</th>
                <th>

                <Button color="danger" size="sm" style={{marginLeft:"10px"}}
                    onClick={() => {
                      refresher();
                    }}
                    style={{fontWeight:"bold"}}
                    >
                      Refresh
                    </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.producttype}</td>
                  <td>{order.productname}</td>
                  <td><p style={{color:"green", padding:"10px", fontWeight:"bold"}}>
                  {order.orderstatus}</p> </td>
                  <td>{order.orderprogress}</td>
                  <td>{order.tailortype}</td>
                  <td>{order.username}</td>
                 
                  
                </tr>
              ))}
            </tbody>
          </table>
        </>
     );
}
 
export default UserOrders;