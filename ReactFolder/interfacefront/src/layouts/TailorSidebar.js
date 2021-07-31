import { NavLink } from "react-router-dom";
import "../index.css";

const TailorSideBar = () => {
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
        <NavLink to="/Ccomponents">Ccomponents</NavLink>

        
      </div>
    </>
  );
};

export default TailorSideBar;
