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
    
   },[refresh]);

    const deleteorder =(id)=>{
    axios.delete(`/api/oders/deleteorder/${id}`);
    setRefresh(true)
    };

    const refresher =()=>{
      setRefresh(true)
    };
  return ( 
        <>
         <table class="table border shadow" style={{ marginTop: "40px" }}>
            <thead>
              <tr class="table-dark">
                <th scope="col">Prdduct Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
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
                  <td>
                  <img src={`/images/${order.productimage}`} alt="Loading...!"
                   width="100px" height="60px"/>
                  </td>
                  <td>{order.productname}</td>
                  <td><p style={{background:"yellow", padding:"10px", fontWeight:"bold"}}>
                  {order.orderstatus}</p> </td>
                  <td>

                      <Link to={`/OrderDetailUser/${order._id}`}>
                      <Button id="btn_table" color="primary" size="sm">
                        View
                      </Button>
                    </Link>
                    <Link to={`/EditorderUser/${order._id}`}>
                      <Button id="btn_table" color="warning" size="sm" >
                        Edit
                      </Button>
                    </Link>

                    
                    <Button color="danger" size="sm" style={{marginLeft:"10px"}}
                    onClick={() => {
                      if (window.confirm (`Are you sure you wish to delete this Order?`))
                        deleteorder(order._id);
                    }}
                    
                    >
                      Cancel
                    </Button>
                    

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
     );
}
 
export default UserOrders;