import axios from "axios";
import "../index.css";
import { useState, useEffect } from "react";
import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const MaleOrderGet_admin = ({ history }) => {
  const [orders, setOrder] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const productname = "Man_Custom_Dress";
  const [dataavaibale, setDataavaibale] = useState("No Order");

  useEffect(() => {
    if (refresh) return setRefresh(false);

    const producttype = "Customdress";
    const loadorders = async () => {
      const configg = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const { data } = await axios.post(
          "/api/oders/customorderPTPN",
          { producttype, productname },
          configg
        );
        if (data == "") {
          setDataavaibale(" Order right Now");
        } else if (data == data) {
          setOrder(data);
          setDataavaibale("All Order Here");
        }
      } catch (error) {
        console.log("not Fetch Data");
      }
    };
    loadorders();
  }, [history, refresh]);

  const deleteorder = (id) => {
    axios.delete(`/api/oders/deleteorder/${id}`);
    setRefresh(true);
  };
  const refresher = () => {
    setRefresh(true);
  };
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
          style={{ float: "right", paddingRight: "20px" }}
        >
          <h1 style={{ marginTop: "-10px" }}>Male Customized Dress Orders</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p style={{ fontSize: "30px", color: "black", opacity: "0.3" }}>
            {dataavaibale}
          </p>

          <table class="table border shadow" style={{ marginTop: "40px" }}>
            <thead>
              <tr class="table-dark">
                <th scope="col-sm">Products Name</th>
                <th scope="col">Handle By Tailor</th>
                <th scope="col"> Progress</th>
                <th scope="col">Latest Order </th>
                <th>
                  {" "}
                  <Button
                    color="danger"
                    size="sm"
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      refresher();
                    }}
                  >
                    Refresh
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.productname}</td>
                  <td>{order.tailortype}</td>
                  <td>
                    <p style={{ padding: "10px", fontWeight: "bold" }}>
                      {order.orderprogress}
                    </p>
                  </td>
                  <td>
                    <p
                      style={{
                        color: "green",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {order.orderstatus}
                    </p>
                  </td>
                  <td>
                    <Link to={`/customdress/view/${order._id}`}>
                      <Button id="btn_table" color="primary" size="sm">
                        View
                      </Button>
                    </Link>
                    <Link to={`/EditOrderAdmin/${order._id}`}>
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
};

export default MaleOrderGet_admin;
