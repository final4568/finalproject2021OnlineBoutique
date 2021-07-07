import { useState } from "react";
import axios from "axios";
import "../index.css";
import Menu from '../layouts/Menu';
import Footer from '../layouts/Footer';

const TailorForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/tailor/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
      setEmail("");
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
    <Menu/>
      <div className="form_main_class">
        <div className="wrapper">
          <div>
            {error && <span className="error-message">{error}</span>}
            {success && <span className="success-message">{success}</span>}
          </div>
          <div className="title-text">
            <div className="title login">Send Email For Password</div>
          </div>
          <div className="form-container">
            <p style={{ marginTop: "20px;" }}>
              Enter Your Email For Password Reset And Click On Send Email
            </p>
            <div className="form-inner">
              <form onSubmit={forgotPasswordHandler} className="login">
                <div className="field">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Send Email" />
                </div>
                <div className="pass-link"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TailorForgotPassword;
