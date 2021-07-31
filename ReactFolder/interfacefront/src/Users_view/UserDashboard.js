import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import UserHeader from "../layouts/UserHeader";
import UserOrders from "../Order/UserOrder";

const UserDashboards = ({ history }) => {
  const [error, setError] = useState("");
  const [privateDate, setPrivateData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/user/login");
    }

    const fetchdata = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/userprivate", config);
        setPrivateData(data.data);
      } catch {
        setError("You are not authorized, please login first");
      }

      fetchdata();
    };
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
            className="col-lg-10"
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
          
          <div className="col-lg-2">            
            <div
              class="btn-chat"
              id="livechat-compact-container"
              style={{visibility: "visible", opacity: 1}}
            >
              <div class="btn-holder">
                <a onclick="" target="_blank" href="/join" class="link">
                  Live Chat
                </a>
              </div>
            </div>
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
    </>
  );
};

export default UserDashboards;
