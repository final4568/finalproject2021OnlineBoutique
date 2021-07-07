
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../index.css';
import Menu from '../layouts/Menu';
import Footer from '../layouts/Footer';

const TailorLogin = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
          history.push("/tailor");
        }
      }, [history]);

      const loginHandler = async (e) => {
        e.preventDefault();
            
        const config = {
          header: {
            "Content-Type": "application/json"
          }
        };
    
        try {
          const { data } = await axios.post(
           "/api/tailor/login",
            { email, password }, config
          );
          
          localStorage.setItem("authToken", data.token);    
          history.push("/tailor/dashboard");
          
        } catch (error) {
          setError(error.response.data.error);
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
        <div className="title-text">
            <div className="title login">
                Tailor Login
                <div>
                    {error && <span className="error-message">{error}</span>}
                </div>
            </div>        
        </div>
        <div className="form-container">            
            <div className="form-inner">
            <form onSubmit={loginHandler} className="login">
                
                <div className="field">
                <input type="email" placeholder="Email Address" required name ="email" id="email" 
                    value = {email}
                    onChange = {(e)=>{setEmail(e.target.value)}}
                />
                </div>
                
                <div className="field">
                <input type="password" name="password" id="password" required  placeholder="Password" 
                    value = {password}
                    onChange = {(e)=>{setPassword(e.target.value)}}
                />
                </div>
                <div className="pass-link">
                Forgot Passowrd ? <Link to="/tailor/forgetpassword">Click Now</Link>
                </div>
                <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login Now"/>
                </div>
                {/* <button type="submit">Login</button> */}
                
            </form>
            </div>
        </div>
        </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default TailorLogin;