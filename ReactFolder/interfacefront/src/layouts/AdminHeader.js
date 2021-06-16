import "../index.css";
import { NavLink, Link } from "react-router-dom";

const AdminHeader = () => {
  const logoutHandler = ({ history }) => {
    localStorage.removeItem("authToken");
  };
  return (
    <>
      <div className="container-fluid" id="Menu">
        <div className="row" id="navigavtion">
          <div className="col-left">
            <div className="menu">
              <nav>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                  <i className="fas fa-bars"></i>
                </label>
               
                  <label for="" className="logo">
                    Admin Dashboard
                  </label>
                  <ul>
                    <li><NavLink exact to="/">Add New Uswer</NavLink></li>
                    <li><NavLink exact to="/tailor/registerbyadmin">Add New Tailor</NavLink></li>
                    <li><NavLink exact to="/About">Add Products</NavLink></li>                    
                    </ul>
              </nav>
            </div>
          </div>
          <div className="col-right" id="dropdown">
                   
            <div className="dropdown" style={{border:"none", textDecoration:"nonne"}}>
              <Link to="/">
                <button onClick={logoutHandler} className="dropbtn" style={{border:"none", textDecoration:"nonne"}}>
                  LOG OUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
