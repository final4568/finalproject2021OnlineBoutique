import { NavLink } from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";
import axios from "axios";

const TailorSideBar = ({history}) => {

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  

  useEffect(() => {
  const token = localStorage.getItem("authToken");
    // if (!token) history.push("tailor/login");

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axios.get(
          "/api/tailor/LoggedTailorProfile",
          config
        );
        setName(data.username);
        setRoom(data.gender);
     

       

      } catch (error) {
        console.log("You are not authorized, please login first");
      }
    };

    fetchPrivateDate();    
  }, [history]);

  return (
    <>
      <div class="sidebar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tailor/dashboard">Dashboard</NavLink>
        <NavLink to="/tailor/User/UserMain">User</NavLink>
        <NavLink to="/ProductTable_tailor">Products</NavLink>
        <NavLink to="/tailororderbygender">ReadMade Order</NavLink>
        <NavLink to="/custom/MaleorderByTailor">Male Custom Order</NavLink>
        <NavLink to="/custom/FemaleorderByTailor">Female Custom Order</NavLink>
        <NavLink to="/LoggedTailor/Profile">Profile</NavLink>
        <NavLink to={`/chat?name=${name}&&room=${room}`}>Message</NavLink>

        
      </div>
    </>
  );
};

export default TailorSideBar;
