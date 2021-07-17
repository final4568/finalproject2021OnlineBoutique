
import "../index.css";
import { NavLink, Link } from "react-router-dom";

const TailorHeader = () => {
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
                    User Dashboard
                  </label>
                  <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>               
                    <li><NavLink exact to="/user/dashboard">Dashboard</NavLink></li>               
                    <li><NavLink exact to="/Loogeduser/Profile">My Profile</NavLink></li>               
                    <li><NavLink exact to="/users/All/Tailor">All Tailor</NavLink></li>               
                    <li><NavLink exact to="/users/GetRMorderbyuser/">Ready Dress</NavLink></li>               
                    <li><NavLink exact to="/customdress/allorderbyuser">Custom Dress</NavLink></li>               

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

export default TailorHeader;
