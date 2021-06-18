import { NavLink } from "react-router-dom";
import "../index.css";


const AdminSideBar = () => {
  return (
    <>

      <div class="sidebar">
        <NavLink  to ="/">Home</NavLink>
        <NavLink  to ="/admin/dashboard">Dashboard</NavLink>
        <NavLink  to ="/report">Users</NavLink>
        <NavLink  to ="/tailorMain">Tailor</NavLink>
        <NavLink  to ="/Overview"> Overview</NavLink>
        <NavLink  to ="/admin/profile"> AdminProfile</NavLink>
      </div>
    </>
  );
};

export default AdminSideBar;
