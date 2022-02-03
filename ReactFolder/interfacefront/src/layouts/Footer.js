import { Link } from "react-router-dom";
import "../index.css";

const Footer = () => {
  return (
    <>
      <div className="container_fluide" id="footer_outer">
        <div className="container">
          <div className="row" id="footerinner">
            <div className="col-sm"></div>
            <div className="col-sm">
              <img
                src="http://moversoman.com/wp-content/uploads/2022/02/logo.jpg"
                alt="loading..."
                width="60%"
              />
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
        <div id="footer_menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/CustomDress">Custom Dress</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container_fluide" id="copyright">
        <div className="social-media">
          <i className="fa fa-skype" aria-hidden="true" />
          <i className="fa fa-pinterest-p" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
          <i className="fa fa-linkedin" aria-hidden="true" />
          Copyright@ 2021 Final Year Project Develop By Group 10
        </div>
      </div>
    </>
  );
};

export default Footer;
