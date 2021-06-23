import { NavLink } from "react-router-dom";
import "../index.css";


const TailorSideBar = () => {
  return (
    <>

      <div class="sidebar">
        <NavLink  to ="/">Home</NavLink>
        <NavLink  to ="/tailor/dashboard">Dashboard</NavLink>
        <NavLink  to ="/tailor/User/UserMain">User</NavLink>
        <NavLink  to ="/ProductTable_tailor">Products</NavLink>
        <NavLink  to ="/LoggedTailor/Profile">Profile</NavLink>
      </div>
    </>
  );
};

export default TailorSideBar;
