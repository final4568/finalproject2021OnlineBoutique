import "./index.css";
import Slider from "./Slider";
import Menu from './layouts/Menu';
import Top from './layouts/Top';
import Footer from './layouts/Footer'
import { Link } from "react-router-dom";
import ProductsComponet from "./ShopPage/ProductsComponet";
import Navbar from "./layouts/NavBar"

const Home = () => {
  return (
    <>
     <Top />
      <Menu />
      <Slider />
      <div className="container-container_fluide" id="section2">
        <div className="container" id="Inersection2">
          <div className="row">
            <div className="col-sm">
              <div className="content_section2">
                <h1>5,000+</h1>
                <p>We've Satisfied Clients</p>
              </div>
            </div>
            <div className="col-sm">
              <div className="content_section2">
                <h1>8,000+</h1>
                <p>We're Stitched Suits </p>
              </div>
            </div>
            <div className="col-sm">
              <div className="content_section2">
                <h1>2019</h1>
                <p>We're Working Since</p>
              </div>
            </div>
            <div className="col-sm">
              <div className="content_section2">
                <h1>200+</h1>
                <p>Order Under Production</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container_fluider" id="bacgimg">
        <div className="container" id="howWord">
          <h1>Our categories</h1>
          <p>
            Stitching Master is the online tailoring service in Pakistan. We are
            offering online tailor service for <br />
            ladies and gents
          </p>
          <img
            src="https://jobsgum.com/wp-content/uploads/2021/05/xyz.png"
            alt="Loading..."
          />
        </div>

        <div className="container" id="serv_img">
          <div className="row" id="ser_img_row">
            <div className="col-lg-6 col-md col-sm">
              <Link to="/product">
                <div id="container">
                  <img
                    src="https://jobsgum.com/wp-content/uploads/2021/05/Untitled-2.jpg"
                    alt="Avatar"
                    className="image"
                  />
                  <div className="overlay">
                    <div className="text" to="/shop">Shop Now</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md col-sm">
              <Link to="/product">
                <div id="container">
                  <img
                    src="https://jobsgum.com/wp-content/uploads/2021/05/Untitled-4.jpg"
                    alt="Avatar"
                    className="image"
                  />
                  <div className="overlay">
                    <div className="text">Shop Now</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container_fluider" id="bacgimg">
        <div className="container" id="howWord">
          <h1 style={{color:"#1a1d1f"}}>Our Products</h1>
          <p>
            Stitching Master is the online tailoring service in Pakistan. We are
            offering online tailor service for <br />
            ladies and gents
          </p>
          <img
            src="https://jobsgum.com/wp-content/uploads/2021/05/xyz.png"
            alt="Loading..."
          />
        </div>
      </div>

      <ProductsComponet/>


      
      <div className="container_fluide" id="changegame">
        <div className="container" id="howWord1">
          <h1>Changing the game. Embracing individuals.</h1>
          <p>
            We see a flawed industry in need of change. Are we all really
            supposed to fit into the same mold? Massive overproduction of dress
            shirts in poor-quality off-the-rack sizes is outdated. What if we
            could show you a smarter way of shopping? No more off-the-rack,
            mass- produced items - just really great, personalized dress shirts
            made to embrace individuality.
          </p>
          <button className="btn_contact">Contact us</button>
        </div>
      </div>

      <div className="container" id="howWord">
        <h1>How we Works</h1>
        <p>
          Stitching Master is the online tailoring service in Pakistan. We are
          offering online tailor service for <br />
          ladies and gents
        </p>
        <img
          src="https://jobsgum.com/wp-content/uploads/2021/05/xyz.png"
          alt="Loading..."
        />
      </div>
      <div className="container" id="steps">
        <div className="row" id="stepsforOrder">
          <div className=" col-sm">
            <div className="innerContent">
              <i className="fa fa-mouse" aria-hidden="true" />
              <h1>PLACE <br/> ORDER ONLINE
              </h1>
              <p>
                Choose your product and personalise it with custom necklines,
                sleeves etc
              </p>
            </div>
          </div>
          <div className="col-sm">
            <div className="innerContent">
              <i className="fa fa-tshirt" aria-hidden="true" />
              <h1>
                YOUR <br />
                MEASUREMENT{" "}
              </h1>
              <p>
                While we pickup your dress material, give us a perfectly fitting
                <br /> to stitch
              </p>
            </div>
          </div>
          <div className="col-sm">
            <div className="innerContent">
              <i className="fa fa-shopping-bag" aria-hidden="true" />
              <h1>
                5 DAYS TO <br />
                STITCH & DELIVEROUR{" "}
              </h1>
              <p>
                Each material is individually hand-cut, stitched and finished by
                professional tailors
              </p>
            </div>
          </div>
          <div className="col-sm">
            <div className="innerContent">
              <i className="fa fa-money" aria-hidden="true" />
              <h1>
                Pay <br />
                Money ON Delivery{" "}
              </h1>
              <p>
                Pay by cash after you receive your newly stitched outfit along
                with the measurement
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
