
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../index.css';
import Menu from '../layouts/Menu';
import Footer from '../layouts/Footer';

const Adminlogin = ({history}) => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
      if (localStorage.getItem("authToken")) {
         history.push("/admin");
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
          const { data }  = await axios.post("/api/admin/login",{ email, password }, config);
          console.log(data.admin);
          localStorage.setItem("authToken", data.token); 
          history.push('/admin/dashboard'); 


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
                Admin Login
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
                Forgot Passowrd ? <Link to="/admin/forgetpassword">Click Now</Link>
                </div>
                <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login Now"/>
                </div>
               
            </form>
            </div>
        </div>
        </div>
        </div>
        <Footer/>

        </>
     );
}
 
 
export default Adminlogin;