import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import UserHeader from "../layouts/UserHeader";
import UserOrders from "../Order/UserOrder";
import Chat from "../ChatComponents/chat/Chat";

const UserDashboard = ({ history }) => {
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) history.push("/user/login");

    const fetchloggedUserdate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axios.get(
          "/api/users/LoggedUserProfile",
          config
        );

        setUser(data);
      } catch (error) {
        console.log("You are not authorized, please login first");
        setError("You are not authorized, please login first")

      }
    };

    fetchloggedUserdate();
  }, [history]);

  return error ? (
    <div style={{ textAlign: "center" }}>
      <span className="error-message">{error}</span>
    </div>
  ) : (
    <>
      <UserHeader />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12"
            id="right_dasBoard_col"
            style={{ padding: "10px" }}
          >
            <h1>User Dashboard</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          
          

        </div>
      </div>

      <div className="containter">
        <div
          className="col-12"
          id="right_dasBoard_col"
          style={{ padding: "0px 30px 0px 30px" }}
        >
        <UserOrders />
        </div>
      </div>
    
  
    {user &&
    <div>
      <Chat name={user.username} room={user.gender}/>
    </div>
    }
    </>
  );
};

export default UserDashboard;
