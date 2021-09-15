import axios from "axios";
import { useEffect, useState } from "react";
import '../index.css'
import { Link } from "react-router-dom";
import Menu from '../layouts/Menu';
import Footer from '../layouts/Footer';


const FemaleProducts = () => {
    const product_category = "Female";
   const[error, setError]= useState([]);
   const[products, setProduct] = useState ([]);

    useEffect(() => {
        const configg={
            headers:{
                "Content-Type" : "application/json",
            },
        };
        const loadproducts = async () => {
            try{
                const { data } = await axios.post('/api/product/maleproducts',{product_category}, configg);
               console.log(data)
               setProduct(data);
               
              }catch(error){
                setError("not Fetch Data")      
              }
        };
    
        loadproducts();
      },[]);
    
    
    return ( 
        <>
        <Menu/>

        <div className="container-fluid" id="product_banner">
            <h1>Female Product Page</h1>
            <p>We are trying Provides all kinds of good ReadyMade & Custom Dress</p>

        {/* top banner */}
        </div>
        <div className="contaciner">
            <div className="row" id="product_row">
                <h1>All Products</h1>
                <p>We are trying Provides all kinds of good ReadyMade & Custom Dress</p>
            </div>
       
        </div>

        <div className="container" id="products">
                <div className="row" >                   
                {products.map((product) => (
                <div className="card" id="card">
                    <div key={product._id}>
                    
                        <div className="imageclass">
                            <img src={`/images/${product.product_photo}`} className="img-fluid" alt="...Loading " width="100%"/>
                            <div class="overlay">
                                <Link to = {`/product/Details/${product._id}`}>
                                <div class="text">Quick View {product.product_name}</div>
                                </Link>

                                 <Link to={`/orderNow/${product._id}`}>
                                 <button className="btn-primary" id="btn_shopNow">Order Now</button>     
                                 </Link>   
                            </div>
                        </div>

                    <div className="p_cat">
                    {product.product_category}
                    </div>
                    <div className="p_name">
                        {product.product_name}
                    </div>
                    </div>

                   
                </div>
                    
                            
                ))}
                </div>
        </div>

        <Footer/>
     
        </>
        

     );
}
 
export default FemaleProducts;
