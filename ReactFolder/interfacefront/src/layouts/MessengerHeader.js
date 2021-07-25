
import "../index.css";
import { Link, NavLink } from "react-router-dom";
const MessengerHeader = () => {


 
  return (
    <>
      <div className="header">
        <div className="container-fluid" id="Menu">
          <div className="row" id="navigavtion">
            <div className="col-left">
              <div className="menu">
                <nav>
                  <div id="logo">Messaner Dashboard</div>
                  <ul className="menu">
                    <li>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                    </li>
                    </ul>
                </nav>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default MessengerHeader;
