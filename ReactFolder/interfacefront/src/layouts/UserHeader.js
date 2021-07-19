
import "../index.css";
import { Link, NavLink } from "react-router-dom";
const UserHeader = () => {


  const logoutHandler = ({ history }) => {
    localStorage.removeItem("authToken");
  };

  return (
    <>
      <div className="header">
        <div className="container-fluid" id="Menu">
          <div className="row" id="navigavtion">
            <div className="col-left">
              <div className="menu">
                <nav>
                  <div id="logo">User Dashboard</div>
                  <ul className="menu">
                    <li>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                    </li>
                  
                    <li>
                      <NavLink exact to="/user/dashboard">
                        Dashboard
                      </NavLink>
                    </li>

                    <li>
                      <NavLink exact to="/Loogeduser/Profile">
                        My Profile
                      </NavLink>
                    </li>

                    <li>
                      <NavLink exact to="/product">
                        Ready Dress
                      </NavLink>
                      <input
                        type="checkbox"
                        id="drop-1"
                        style={{ opacity: "0" }}
                      />
                      <ul>
                        <li>
                          <NavLink exact to="/product/maleproducts">
                            Male Dress
                          </NavLink>
                        </li>
                        <li>
                          <NavLink exact to="/product/femaleproducts">
                            Female Dress
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <NavLink to="/manmodel">Customized Dress</NavLink>
                      <input
                        type="checkbox"
                        id="drop-1"
                        style={{ opacity: "0" }}
                      />
                      <ul>
                        <li>
                          <NavLink to="/manmodel">Male Dress</NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <NavLink to="/Contact">Contact Us</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-right" id="dropdown">
              <div className="dropdown">
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
        </div>
      </div>
    </>
  );
};

export default UserHeader;
