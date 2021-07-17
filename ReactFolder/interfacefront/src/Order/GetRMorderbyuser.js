import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import UserHeader from "../layouts/UserHeader";
import { Link } from "react-router-dom";

const GetRMorderbyuser = ({ history }) => {
  const [userid, setUserID] = useState([]);
  const [orders, setOrder] = useState([]);
  const [error, setError] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const producttype = "ReadMade";

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
          "/api/oders/customorderbyuser",
          { userid, producttype },
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

  const deleteorder = (id) => {
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
          <h1>Your All ReadyMade Dress Orders</h1>
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
              <th scope="col">Action </th>

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
                  <Link to={`/OrderDetailUser/${order._id}`}>
                    <Button id="btn_table" color="primary" size="sm">
                      View
                    </Button>
                  </Link>
                  <Link to={`/EditorderUser/${order._id}`}>
                    <Button id="btn_table" color="warning" size="sm">
                      Edit
                    </Button>
                  </Link>

                  <Button
                    color="danger"
                    size="sm"
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you wish to delete this Order?`
                        )
                      )
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
      </div>
    </>
  );
};

export default GetRMorderbyuser;
