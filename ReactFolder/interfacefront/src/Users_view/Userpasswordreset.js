import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../index.css'


  const Userpasswordreset = ({ history, match }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    const resetPasswordHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      if (password !== confirmPassword) {
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          setError("");
        }, 5000);
        return setError("Passwords don't match");
      }
  
      try {
        const { data } = await axios.put(//req.params.resetToken
          `/api/users/resetpassword/${match.params.resetToken}`,
          {
            password,
          },
          config
        );
  
        console.log(data);
        setSuccess(data.data);
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    };


  return (  

    <>
        
        <div className="form_main_class">
        <div className="wrapper">
          <div>
          {error && <span className="error-message">{error} </span>}
              {success && (
                <span className="success-message">
                  {success} <Link to="/user/login">Login</Link>
                </span>
              )}
          </div>
        <div className="title-text">
            <div className="title login">
              Reset Password
             
            </div>
            
            
       
        </div>
        <div className="form-container">            
            <div className="form-inner">
            <form onSubmit={resetPasswordHandler} className="login">            
                
                <div className="field">
                <input type="password" name="password" id="password" autoComplete="off" placeholder="Password" 
                    value = {password}
                    onChange = {(e)=>{setPassword(e.target.value)}}
                />
                </div>
                <div className="field">
                <input type="password" placeholder="Confirm password" name="confirmPassword" id="confirmPassword" autoComplete="off"  
                    value = {confirmPassword}
                    onChange = {(e)=>{setConfirmPassword(e.target.value)}}
                />
                </div>
                <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value=" Reset Password"/>
                </div>
                
            </form>
            </div>
        </div>
        </div>
        </div>
        </>


  );
}
 
export default Userpasswordreset;
// export default Userpasswordreset ;