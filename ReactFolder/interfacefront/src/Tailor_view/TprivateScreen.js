
import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const TailorPrivateScreen = ({history}) => {
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
          // localStorage.removeItem("authToken");
          setError("You are not authorized, please login first");
        }
      };
  
      fetchPrivateDate();
    }, [history]);
  
    const logoutHandler = () => {
      localStorage.removeItem("authToken");
      history.push("/tailor/login");
    };
  
    return error ? (
      <div style={{ textAlign: "center" }}>
        <span className="error-message">{error}</span>
      </div>
    ) : (
      <>
        <div className="container-fluid">
          <div className="row" id="main-row">
            <div className="col-3">1</div>
            <div className="col-9">
              <div style={{ background: "green", color: "wite" }}>
                {privateDate}
              </div>
              <button
                style={{
                  margin: "300 auto",
                }}
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </>
    );
};
 
export default TailorPrivateScreen;