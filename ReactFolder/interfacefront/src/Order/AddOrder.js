import axios from "axios";
import { useEffect, useState } from "react";
import { useRouteMatch , Link} from "react-router-dom";

const AddOrder = ({history, match}) => {
    const[productname, setPName] =useState("");
    const[productid, setProductID] =useState("");
    const[productimage, setImg] = useState("");
    const[username, setUsername] = useState("");
    const[userid, setUserID] =useState("");


    const [userprofile, setProfile] = useState({});
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("");


    useEffect(() => {      
      // get proiduct data 
      const fetchproduct = async () => {
          const product = await fetch(
            `/api/product/productdetail/${match.params.id}`
          ).then((res) => res.json());   
          
          setProductID(product._id);
          setPName(product.product_name);
          setImg(product.product_photo);
    
        };

        // get looged User
        const token = localStorage.getItem("authToken");
        if (!token) history.push("/user/login");
        const fetchPrivateDate = async () => {
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            };
            try {
              const { data } = await axios.get(
                "/api/users/LoggedUserProfile",
                config
              );
              setProfile(data);
              setUsername(data.username);
              setUserID(data._id);

            } catch (error) {
              console.log("You are not authorized, please login first");
            }
          };

        fetchPrivateDate();
        fetchproduct();
      }, [history, match]);

      const registerHandler = async (e) => {
        e.preventDefault();
        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };
        try {
          const { data } = await axios.post(
          "/api/oders/orderadd",
            {
              productname,
              productid,
              userid,
              username,
              productimage,
             
            },
            config
          );
          console.log(data.data)
          setSuccess(data.data); 

        alert("oder successfully");
  
        } catch (error) {
          setError(error.response.data.error);
          setTimeout(() => {
          }, 3000);
          return setError("This Email Already Registered...! Try Another");
          
        }
      };




    return (
        <>
        <h1>{productname}</h1>
        <h1>{productid}</h1>
        <h1>{productimage}</h1>
        <h1>{username}</h1>
        <h1>{userid}</h1>
        <div>{error}</div>
        <button className="btn-primary" style={{margin:"30px", padding:"20px"}} onClick={registerHandler}>asdasdsa</button>
        <div>{error}</div>
        </>
        
      );
}
 
export default AddOrder;