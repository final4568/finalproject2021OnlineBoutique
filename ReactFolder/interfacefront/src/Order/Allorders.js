
import axios from "axios";
import "../index.css";
import { useState, useEffect } from "react";
import AdminHeader from '../layouts/AdminHeader';
import AdminSideBar from '../layouts/AdminSlidebar';
import { Button } from "reactstrap";
import {Link } from "react-router-dom"
const Allorders = ({history}) => {
    const [orders, setOrders] = useState([]);
    const [refresh, serRefresh] =useState(false);


    useEffect(() => {   
      if (refresh) return serRefresh(false);

        const loadorders = async () => {
          const result = await axios.get("/api/oders/seeorder");
          setOrders(result.data);
        };
    
        loadorders();
      }, [history, refresh]);

      const deleteorder =(id)=>{
          axios.delete(`/api/oders/deleteorder/${id}`);
          serRefresh(true)
      };

    return ( 
      <>
      <AdminHeader />
      <div className="containter">
        <div className="col-2" id="left_dasBoard_col" style={{ float: "left" }}>
          <AdminSideBar />
        </div>
        <div className="col-10" id="right_dasBoard_col" style={{ float: "right", paddingRight:"20px"}}>
       
          <h1 style={{marginTop:"-10px"}}>All Orders</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        

          <table class="table border shadow" style={{ marginTop: "40px" }}>
            <thead>
              <tr class="table-dark">
                <th scope="col">Products Name</th>
                <th scope="col">Category</th>
                <th scope="col"> Status</th>
                <th scope="col">Action </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.productname}</td>
                  <td>{order.productcategory}</td> 
                  <td><p style={{background:"yellow", padding:"10px"}}>
                  {order.orderstatus}</p></td>                  
                  <td>
                  
                <Link to={`/orderdetail/${order._id}`}>
                      <Button id="btn_table" color="primary" size="sm">
                        View
                      </Button>
                    </Link>
                    <Link to={`/EditOrderAdmin/${order._id}`}>
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
 
export default Allorders;