import { NavLink } from "react-router-dom";
import "../index.css";

const AdminSideBar = () => {
  return (
    <>
      <div class="sidebar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/User/UserMain">Users</NavLink>
        <NavLink to="/tailorMain">Tailor</NavLink>
        <NavLink to="/product/allProducttable"> All Products</NavLink>
        <NavLink to="/allorders">Ready Dress Orders</NavLink>
        <NavLink to="/customdress/orders">Male Custom Dress</NavLink>
        <NavLink to="/Femalecustomdress/orders">Female Custom Dress</NavLink>
        <NavLink to="/Overview"> Overview</NavLink>
        <NavLink to="/admin/profile"> AdminProfile</NavLink>
      </div>
    </>
  );
};

export default AdminSideBar;
