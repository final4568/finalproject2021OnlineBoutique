import { NavLink } from "react-router-dom";
import "../index.css";


const AdminSideBar = () => {
  return (
    <>

      <div class="sidebar">
        <NavLink  to ="/">Home</NavLink>
        <NavLink  to ="/admin">Dashboard</NavLink>
        <NavLink  to ="/report">Users</NavLink>
        <NavLink  to ="/tailorMain">Tailor</NavLink>
        <NavLink  to ="/Overview"> Overview</NavLink>
        <NavLink  to ="/adminprofile"> AdminProfile</NavLink>
      </div>
    </>
  );
};

export default AdminSideBar;
