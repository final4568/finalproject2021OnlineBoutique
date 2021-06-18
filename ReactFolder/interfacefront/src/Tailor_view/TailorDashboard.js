import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import TailorHeader from "../layouts/TailorHeader";
import TailorSideBar from "../layouts/TailorSidebar";

const TailorDashboard = ({ history }) => {
  const [error, setError] = useState("");
  const [privateDate, setPrivateData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/tailor/login");
    }

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/tailorprivate", config);
        setPrivateData(data.data);
      } catch (error) {
        setError("You are not authorized, please login first");
      }
    };

    fetchPrivateDate();
  }, [history]);

  return error ? (
    <div style={{ textAlign: "center" }}>
      <span className="error-message">{error}</span>
    </div>
  ) : (
    <>
      <TailorHeader />
      <div className="containter">
        <div className="col-2" id="left_dasBoard_col" style={{ float: "left" }}>
          <TailorSideBar />
        </div>
        <div
          className="col-10"
          id="right_dasBoard_col"
          style={{ float: "right" }}
        >
          <h1>Tailor Dashboard</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </>
  );
};

export default TailorDashboard;
