import Menu from "../layouts/Menu";
import Footer from "../layouts/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import "../index.css";

const FemaleModel = ({ history }) => {
  const productname = "Female_Custom_Dress";
  const producttype = "Customdress";

  const [selected, setSelected] = useState("");
  const [data, setData] = useState({});

  const [coller, setColler] = useState(
    "123.3,28 128.7,30 114,64 81.8,64.2 70,30.2 75.2,28 84.7,58.7 111,58.8"
  );
  const [collercolor, setCollercolor] = useState("a67d11");
  const [collerid, setCollerid] = useState("coller");

  const [shirtbody, setBody] = useState(
    "M49.4,40.8l9.1-5.7l19.8-8.5c0,0,0.6-0.2,3.6,0.5c4.1,1,11.4,12.9,18.5,12.9c6.8-0.1,14-16,21.4-13c5.4,2.2,10.8,4.5,16.2,6.7c3.2,1.3,6.9,2.6,9.7,4.6c1.4,1,2.6,2.2,3.9,3.3L147,74.5l2.1,108.4l4.6,75.9c0,0-9.6,19.4-52.1,22c-42.5,2.7-59.5-22-59.5-22l9.3-87l3.8-71.8l-2.6-27.5L49.4,40.8z"
  );
  const [bodycolor, setBodycolor] = useState("313828");
  const [bodyid, setBodyid] = useState("body1");

  const [arm, setArm] = useState(
    "M181.2,185.1c0,0-9.3,8.1-20.1,4.5l-17.9-82.7l-66.7-0.7l-19.2,5.1l-1.3,9.4l-15.9,68.8c0,0-7,3.8-20-4.6l-0.1-8.4c0,0-0.4-5.5,1.3-11.4c0,0,19.5-117.4,28.4-124.1c0,0,77.2,0.5,77.9,0.5c5.7,0,11.4-0.3,17-0.5c1.7,0-3-4.9-1.4-5c1.7,0,9.3,6,10.2,7.6c1.5,2.6,2.3,5.8,3.1,8.6c0.9,2.9,1.8,5.7,2.6,8.6c0,0,0,0.1,0,0.1l7.9,32.6l13.4,75.3l0.2,6.9L181.2,185.1z"
  );
  const [armcolor, setArmcolor] = useState("white");
  const [armid, setArmId] = useState("Arm");

  const manageColler = (e) => {
    setCollerid(e.target.getAttribute("id"));
    setCollercolor(e.target.getAttribute("fill"));
    setColler(e.target.getAttribute("points"));
    setSelected(collerid);
  };

  const setColor = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setCollercolor(color);
  };

  const managebody = (e) => {
    setBodyid(e.target.getAttribute("id"));
    setBodycolor(e.target.getAttribute("fill"));
    setBody(e.target.getAttribute("d"));
    setSelected(bodyid);
  };
  const setColorbody = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setBodycolor(color);
  };

  const manageArm = (e) => {
    setArmId(e.target.getAttribute("id"));
    setArmcolor(e.target.getAttribute("fill"));
    setArm(e.target.getAttribute("d"));
    setSelected(armid);
  };
  const manageArmColor = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
    setArmcolor(color);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) history.push("/user/login");
  }, [history]);

  const savemodel = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/oders/orderadd",
        {
          productname,
          producttype,
          collerid,
          collercolor,
          shirtbody,
          bodyid,
          bodycolor,
          coller,
          shirtbody,
          arm,
          armcolor,
          armid,
        },
        config
      );
      //   console.log(data)
      history.push(`/addmeasurement/${data._id}`);
    } catch (e) {
      console.log(e);
    }
  };

  //  console.log(obj)
  return (
    <>
      <Menu />

      <div className="container" style={{ paddingTop: "30px" }}>
        <h2 style={{ textTransform: "uppercase", fontSize: "30px" }}>
          Customized Any Part
        </h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div className="container">
        <div>
          Selected:{" "}
          <strong
            style={{ marginTop: "10px", fontWeight: "700", color: "green" }}
          >
            {selected}
          </strong>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" id="svgcol_right">
            <div id="svgg">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 200 300"
                style={{
                  enableBackground: "new 0 0 200 300",
                  width: "400px",
                  marginTop: "-10px",
                }}
                xmlSpace="preserve"
              >
                <g id="XMLID_7_">
                  <g id="XMLID_9_">
                    <g id="XMLID_37_">
                      <path
                        id={armid}
                        class="st0"
                        d={arm}
                        opacity="0.99"
                        fill="#323829"
                        stroke="black"
                        stroke-width="0.09"
                        stroke-miterlimit="3"
                        onClick={manageArm}
                        // Both Arms
                      />
                    </g>
                  </g>

                  <path
                    id={bodyid}
                    class="st1"
                    d={shirtbody}
                    onClick={managebody}
                    fill="#323829"
                    stroke="black"
                    stroke-width="0.1"
                    stroke-miterlimit="10"
                    //body
                  />

                  <polygon
                    id={collerid}
                    class="st2"
                    points={coller}
                    fill="#A67E2D"
                    stroke="black"
                    stroke-width="0.1"
                    stroke-miterlimit="10"
                    onClick={manageColler}

                    // ban
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              style={{
                fontWeight: 800,
                color: "green",
                border: "1px solid gray",
                borderRadius: "5px",
                padding: "20px",
                overflow: "scroll",
                height: "600px",
                marginBottom: "100px",
              }}
            >
              <h3>
                {" "}
                <strong> Style Your Dresses</strong>
              </h3>
              <br />
              <br />

              <strong style={{ color: "Black", marginTop: "20px" }}>
                Collers Styles
              </strong>
              <div
                className="collers_class"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "10px",
                }}
              >
                {/* first coller */}
                <div className="svg_part">
                  <svg style={{ width: "100px", height: "100px" }}>
                    <polygon
                      id="Coller1"
                      class="st0"
                      points="122.5,27.5 127.5,29.3 99,73.2 70.8,29.7 76.5,27.3 99.5,60.8 121.8,27 "
                      fill="#323829"
                      transform="translate(-50, 10)"
                      onClick={manageColler}
                    />
                  </svg>
                </div>

                {/* 2nd coller */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <polygon
                    id="Coller2"
                    class="st0"
                    points="123.9,28 128.3,29.9 105.1,59.5 98.5,60.4 71,29.9 76.3,27.6 101.3,55.9  "
                    transform="translate(-50, 20)"
                    fill="#323829"
                    onClick={manageColler}
                  />
                </svg>

                {/* 3rd coller */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <polygon
                    id="Coller3"
                    class="st0"
                    points="123.3,28 128.7,30 114,64 81.8,64.2 70,30.2 75.2,28 84.7,58.7 111,58.8"
                    transform="translate(-50, 20)"
                    fill="#323829"
                    onClick={manageColler}
                  />
                </svg>
              </div>

              {/* color for coller */}
              <strong
                style={{ color: "Black", marginTop: "20px", float: "right" }}
              >
                Select Color For Collers
              </strong>
              <div className="Coller_color" style={{ marginTop: "50px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() => setColor("#2b010b")}
                    style={{
                      background: "#2b010b",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColor("#fff")}
                    style={{
                      background: "#fff",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColor("#a67d11")}
                    style={{
                      background: "#a67d11",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColor("#313828")}
                    style={{
                      background: "#313828",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColor("#b2d286")}
                    style={{
                      background: "#b2d286",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColor("#bea272")}
                    style={{
                      background: "#bea272",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                </div>
              </div>

              <strong style={{ color: "Black", marginTop: "100px" }}>
                Body Style
              </strong>
              <div
                className="Body_class"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "10px",
                }}
              >
                {/* first body */}
                <div>
                  <svg
                    className="svg_part"
                    style={{ width: "100px", height: "100px", margin: "5px" }}
                  >
                    <path
                      id="body1"
                      class="st1"
                      d="M49.4,40.8l9.1-5.7l19.8-8.5c0,0,0.6-0.2,3.6,0.5c4.1,1,11.4,12.9,18.5,12.9   c6.8-0.1,14-16,21.4-13c5.4,2.2,10.8,4.5,16.2,6.7c3.2,1.3,6.9,2.6,9.7,4.6c1.4,1,2.6,2.2,3.9,3.3L147,74.5l2.1,108.4   c0,0,4.6,75.6,4.6,75.9c0-0.7-3.5-2.9-4.2-3.5c-2.2-1.9-4.4-3.8-6.9-5.4c-4.9-3.1-10.4-5.4-16.1-6.5c-1.2-0.2-2.5-0.4-3.7-0.3   c-1.1,0.1-2.1,0.4-3.1,0.7c-28.5,8.8-56.1,20.1-82.7,33.6c-0.8-2.2,0.4-5.9,0.7-8.2c0.5-3.8,1.1-7.7,1.6-11.5   c1.4-10.4,2.9-20.7,4.3-31.1c2.4-17.5,4.9-35,7.3-52.5c0.1-0.8,0.2-1.6,0.3-2.5c0,0,3.8-71.8,3.8-71.8l-2.6-27.5L49.4,40.8z"
                      fill="#323829"
                      transform="translate(-50, 20)"
                      onClick={managebody}
                    />
                  </svg>
                </div>

                {/* 2nd body */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <g>
                    <path
                      id="body2"
                      class="st1"
                      d="M49.4,40.8l9.1-5.7l19.8-8.5c0,0,0.6-0.2,3.6,0.5c4.1,1,11.4,12.9,18.5,12.9
                      c6.8-0.1,14-16,21.4-13c5.4,2.2,10.8,4.5,16.2,6.7c3.2,1.3,6.9,2.6,9.7,4.6c1.4,1,2.6,2.2,3.9,3.3L147,74.5l2.1,108.4l4.6,75.9
                      H42.1l9.3-87l3.8-71.8l-2.6-27.5L49.4,40.8z"
                      fill="#323829"
                      transform="translate(-50, 20)"
                      onClick={managebody}
                    />
                  </g>
                </svg>

                {/* 3rd body */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <g>
                    <path
                      id="body3"
                      class="st1"
                      d="M49.4,40.8l9.1-5.7l19.8-8.5c0,0,0.6-0.2,3.6,0.5c4.1,1,11.4,12.9,18.5,12.9c6.8-0.1,14-16,21.4-13c5.4,2.2,10.8,4.5,16.2,6.7c3.2,1.3,6.9,2.6,9.7,4.6c1.4,1,2.6,2.2,3.9,3.3L147,74.5l2.1,108.4l4.6,75.9c0,0-9.6,19.4-52.1,22c-42.5,2.7-59.5-22-59.5-22l9.3-87l3.8-71.8l-2.6-27.5L49.4,40.8z"
                      fill="#323829"
                      transform="translate(-50, 20)"
                      onClick={managebody}
                    />
                  </g>
                </svg>
              </div>

              {/* color for coller */}
              <strong
                style={{ color: "Black", marginTop: "20px", float: "right" }}
              >
                Select Color For Body
              </strong>
              <div className="Coller_color" style={{ marginTop: "50px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() => setColorbody("#2b010b")}
                    style={{
                      background: "#2b010b",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColorbody("#fff")}
                    style={{
                      background: "#fff",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColorbody("#a67d11")}
                    style={{
                      background: "#a67d11",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColorbody("#313828")}
                    style={{
                      background: "#313828",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColorbody("#b2d286")}
                    style={{
                      background: "#b2d286",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => setColorbody("#bea272")}
                    style={{
                      background: "#bea272",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                </div>
              </div>

              <strong style={{ color: "Black", marginTop: "100px" }}>
                Arm Style
              </strong>
              <div
                className="Body_class"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "10px",
                }}
              >
                {/* first body */}
                <div>
                  <svg
                    className="svg_part"
                    style={{ width: "100px", height: "100px", margin: "5px" }}
                  >
                    <path
                      id="Arm_1"
                      class="st1"
                      d="M178.6,162.8c0,0-10.4,7-21.6,7.1l-13.8-63l-66.7-0.7l-19.2,5.1l-1.3,9.4l-11.6,49.5
                      c0,0-7.8,0-23-3.3l0.8-10c0,0,1.1-10,2.8-16c0,0,15.8-93.3,24.7-100.1c0,0,77.2,0.5,77.9,0.5c5.7,0,11.4-0.3,17-0.5
                      c1.7,0-3-4.9-1.4-5c1.7,0,9.3,6,10.2,7.6c1.5,2.6,2.3,5.8,3.1,8.6c0.9,2.9,1.8,5.7,2.6,8.6c0,0,0,0.1,0,0.1l7.9,32.6l9.1,48.9
                      l1.6,12L178.6,162.8z"
                      fill="#323829"
                      transform="translate(-50, 20)"
                      onClick={manageArm}
                    />
                  </svg>
                </div>

                {/* 2nd body */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <g>
                    <path
                      id="Arm2"
                      class="st1"
                      d="M50.6,112l4.7-16h5l16.2,10.1L143,85.3l10.5,23.5l18.2-5.5l-2.3-9.7L159.3,61     c0,0,0-0.1,0-0.1c-0.9-2.9-1.8-5.7-2.6-8.6c-0.9-2.8-1.7-6-3.1-8.6C152.6,42,145,36,143.3,36c-1.7,0,3,4.9,1.4,5     c-5.7,0.2-11.4,0.5-17,0.5c-0.7,0-77.9-0.5-77.9-0.5c-8.9,6.8-20,70.4-20,70.4L50.6,112"
                      fill="#323829"
                      transform="translate(-50, 20)"
                      onClick={manageArm}
                    />
                  </g>
                </svg>

                {/* 3rd body */}
                <svg
                  className="svg_part"
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                >
                  <g>
                    <path
                      id="Arm3"
                      class="st1"
                      d="M181.2,185.1c0,0-9.3,8.1-20.1,4.5l-17.9-82.7l-66.7-0.7l-19.2,5.1l-1.3,9.4l-15.9,68.8c0,0-7,3.8-20-4.6l-0.1-8.4c0,0-0.4-5.5,1.3-11.4c0,0,19.5-117.4,28.4-124.1c0,0,77.2,0.5,77.9,0.5c5.7,0,11.4-0.3,17-0.5c1.7,0-3-4.9-1.4-5c1.7,0,9.3,6,10.2,7.6c1.5,2.6,2.3,5.8,3.1,8.6c0.9,2.9,1.8,5.7,2.6,8.6c0,0,0,0.1,0,0.1l7.9,32.6l13.4,75.3l0.2,6.9L181.2,185.1z"
                      fill="#323829"
                      transform="translate(-50, 20)"
                      onClick={manageArm}
                    />
                  </g>
                </svg>
              </div>

              {/* color for coller */}
              <strong
                style={{ color: "Black", marginTop: "20px", float: "right" }}
              >
                Select Color For Arm
              </strong>
              <div className="Coller_color" style={{ marginTop: "50px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() => manageArmColor("#2b010b")}
                    style={{
                      background: "#2b010b",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => manageArmColor("#fff")}
                    style={{
                      background: "#fff",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => manageArmColor("#a67d11")}
                    style={{
                      background: "#a67d11",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => manageArmColor("#313828")}
                    style={{
                      background: "#313828",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => manageArmColor("#b2d286")}
                    style={{
                      background: "#b2d286",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                  <button
                    onClick={() => manageArmColor("#bea272")}
                    style={{
                      background: "#bea272",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    .
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Button
          variant="outlined"
          color="success"
          style={{
            float: "left",
          }}
          onClick={savemodel}
        >
          Order Now
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default FemaleModel;
