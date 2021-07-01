import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import UserHeader from "../layouts/UserHeader"
import UserOrders from "../Order/UserOrder";

const UserDashboards = ({history}) => {
    const [error, setError] = useState("");
    const [privateDate, setPrivateData] = useState("");


    useEffect(()=>{
        if(!localStorage.getItem("authToken")){
            history.push("/user/login");
        }

        const fetchdata = async()=>{
            const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            }
            }; 

            try{
                const { data } = await axios.get("/api/userprivate", config);
                setPrivateData(data.data);
            }catch{
                setError("You are not authorized, please login first");
            }

            fetchdata();

        }
    },[history])

    const logoutuser= ()=>{
    localStorage.removeItem("authToken");
    history.push("/")
    }

    return error ? (
        <div style={{ textAlign: "center" }}>
          <span className="error-message">{error}</span>
        </div>
      ) : (
        <>
        <UserHeader/>
          <div className="containter">
           
            <div
              className="col-12"
              id="right_dasBoard_col"
              style={{ padding:"30px"}}
            >
              <h1>User Dashboard</h1>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <UserOrders/>
            </div>
          </div>
        </>
      );
    
}
 
export default UserDashboards;