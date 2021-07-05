import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Button } from "reactstrap";
import {Link } from "react-router-dom"
import axios from "axios";
import TailorHeader from "../layouts/TailorHeader";
import TailorSideBar from "../layouts/TailorSidebar";


const OrderByTailors = () => {
   const[tailortype, setTailortype] = useState([]);
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
          "/api/tailor/LoggedTailorProfile",
          config
        );
        console.log(data.gender)
        setTailortype(data.gender);
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
      const { data } = await axios.post('/api/oders/orderbytailor',{tailortype}, configg);
     
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
        <TailorHeader/>
      <div className="containter">
        <div className="col-2" id="left_dasBoard_col" style={{ float: "left" }}>
          <TailorSideBar />
        </div>
        <div
          className="col-10"
          id="right_dasBoard_col"
          style={{ float: "right", marginRight: "0px"}}>

          <h1>{tailortype} Tailor Panel</h1>
          <p className="tailorprofile">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </p>
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

                      <Link to={`/Viewordertailor/${order._id}`}>
                      <Button id="btn_table" color="primary" size="sm">
                        View
                      </Button>
                    </Link>
                    <Link to={`/Editordertailor/${order._id}`}>
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
                      Delete
                    </Button>
                   
                    

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>

         
        </>
     );
}
 
export default OrderByTailors;
 
// export default OrderByTailors;