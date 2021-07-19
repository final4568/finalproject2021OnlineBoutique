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
              <div id="logo" style={{marginTop:"-10px"}}>Admin dashboard</div>    
                  <ul>
                    <li><NavLink exact to="/User/RegisterByAdmin">Add New User</NavLink></li>
                    <li><NavLink exact to="/tailor/registerbyadmin">Add New Tailor</NavLink></li>
                    <li><NavLink exact to="/uploadproduct">Add Products</NavLink></li>                    
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
