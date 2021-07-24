import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import UserHeader from "../layouts/UserHeader";
import { Link } from "react-router-dom";

const Custom_maleDressOrder_User = ({ history }) => {
  const [userid, setUserID] = useState([]);
  const [orders, setOrder] = useState([]);
  const [error, setError] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const producttype = "Customdress";
  const productname ="Man_Custom_Dress"

  useEffect(() => {
    if (refresh) return setRefresh(false);
    const token = localStorage.getItem("authToken");

    const LoggedUserdata = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axios.get(
          "/api/users/LoggedUserProfile",
          config
        );
        setUserID(data._id);
      } catch (err) {
        setError("user not find");
      }
    };

    const getordersbyuser = async () => {
      const configg = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const { data } = await axios.post(
          "/api/oders/customorderbyuserPN",
          { userid, producttype, productname },
          configg
        );
        console.log(data.data);

        setOrder(data);
      } catch (error) {
        setError("not Fetch Data");
      }
    };
    getordersbyuser();

    LoggedUserdata();
  }, [refresh, history]);

  const deleteorder =(id)=>{
    axios.delete(`/api/oders/deleteorder/${id}`);
    setRefresh(true);
};
  const refresher = () => {
    setRefresh(true);
  };

  return (
    <>
      <UserHeader />
      <div className="containter">
        <div
          className="col-12"
          id="right_dasBoard_col"
          style={{ padding: "30px" }}
        >
          <h1>Your Only Male Customized Dress Orders</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div className="container-fluide" style={{ padding: "30px" }}>
        <table class="table border shadow" style={{ marginTop: "40px" }}>
          <thead>
            <tr class="table-dark">
              <th scope="col">Dress Type</th>
              <th scope="col">Product Name</th>
              <th scope="col">Order Status</th>
              <th scope="col">Progress</th>
              <th scope="col">Submitted To</th>
              <th scope="col">Action</th>

              <th>
                <Button
                  color="danger"
                  size="sm"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    refresher();
                  }}
                  style={{ fontWeight: "bold" }}
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
                <td>
                  <p
                    style={{
                      color: "green",
                      padding: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {order.orderstatus}
                  </p>{" "}
                </td>
                <td>{order.orderprogress}</td>
                <td>{order.tailortype}</td>
                <td>    
                 <Link to={`/customized/orderbyuser/${order._id}`}>
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
    </>
  );
};

export default Custom_maleDressOrder_User;



