import { NavLink } from "react-router-dom";
import "../index.css";


const TailorSideBar = () => {
  return (
    <>

      <div class="sidebar">
        <NavLink  to ="/">Home</NavLink>
        <NavLink  to ="/tailor">Dashboard</NavLink>
        <NavLink  to ="#">User</NavLink>
        <NavLink  to ="#">Orders</NavLink>
        <NavLink  to ="/LoggedTailorProfile">Profile</NavLink>
      </div>
    </>
  );
};

export default TailorSideBar;
