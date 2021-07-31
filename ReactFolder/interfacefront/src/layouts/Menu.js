import "../index.css";
import { Link, NavLink } from "react-router-dom";
import Top from "../layouts/Top";
const Menu = () => {
  return (
    <>
      <div className="header">
        <Top />
        <div className="container-fluid" id="Menu">
          <div className="row" id="navigavtion">
            <div className="col-left">
              <div className="menu">
                <nav>
                  <div id="logo">ONLINE BOUTIQUE</div>
                  <ul className="menu">
                    <li>
                      <NavLink exact to="/">
                        Home
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
                        <li>
                          <NavLink to="/custom/Femalemodel">
                            Female Dress
                          </NavLink>
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
                <button className="dropbtn">Login</button>
                <div className="dropdown-content">
                  <NavLink to="/admin/dashboard">Admin</NavLink>
                  <NavLink to="/tailor/dashboard">Tailor</NavLink>
                  <NavLink to="/user/dashboard">Users</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
