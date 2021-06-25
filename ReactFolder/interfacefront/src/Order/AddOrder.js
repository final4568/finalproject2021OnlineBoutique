import axios from "axios";
import { useEffect, useState } from "react";
import { useRouteMatch , Link} from "react-router-dom";

const AddOrder = ({history, match}) => {
    const[product_name, setPName] =useState("");
    const[pid, setPe] =useState("");
    const[pimg, setImg] =useState("");
    const [userprofile, setProfile] = useState({});


    useEffect(() => {
      
      // get proiduct data 
      const fetchproduct = async () => {
          const product = await fetch(
            `/api/product/productdetail/${match.params.id}`
          ).then((res) => res.json());    
          setPName(product.product_name);
          setPe(product._id);
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
            } catch (error) {
              console.log("You are not authorized, please login first");
            }
          };
        fetchPrivateDate();
        fetchproduct();
      }, [history, match]);



    return (
        <>
        <h1>{product_name}</h1>
        <h1>{pid}</h1>
        <h1>{pid}</h1>
        <h1>{userprofile.username}</h1>
        <h1>{pimg}</h1>
        <img src={`/images/${pimg}`}/>
        </>
        
      );
}
 
export default AddOrder;