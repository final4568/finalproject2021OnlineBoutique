import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../index.css";
import Menu from "../layouts/Menu";
import Footer from "../layouts/Footer";

const ResignerScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/admin/register",
        {
          username,
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);
      setSuccess(data.data);
      history.push("/admin/login");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setPassword("");
        setConfirmPassword("");
        setError("");
      }, 3000);
      return setError("This Email Already Registered...! Try Another");
    }
  };

  return (
    <>
      <Menu />
      <div className="form_main_class">
        <div className="wrapper">
          <div className="title-text">
            <div className="title login">
              Admin SignUp
              <div>
                {error && <span className="error-message">{error}</span>}
                {success && <span className="success-message">{success}</span>}
              </div>
            </div>
          </div>
          <div className="form-container">
            <div className="form-inner">
              <form onSubmit={registerHandler} className="login">
                <div className="field">
                  <input
                    type="text"
                    placeholder="Name"
                    name="username"
                    id="username"
                    required
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="field">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="field">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="ConfirmPassword"
                    id="ConfirmPassword"
                    required
                    value={confirmpassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Sign Up" />
                </div>
                {/* <button type="submit"> sign up</button> */}
                <div className="pass-link">
                  Already Have Account ? <Link to="/admin">Login Now</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResignerScreen;
