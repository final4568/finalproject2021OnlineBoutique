import axios from "axios";
import { useEffect, useState } from "react";
import '../index.css'
import { Link } from "react-router-dom";


const ProductsPage = ({history}) => {
    const[products, setProduct] =useState ([]);

    useEffect(() => {
    
        const loadproducts = async () => {
          const result = await axios.get("/api/product/getallproducts");
          setProduct(result.data);
        };
    
        loadproducts();
      }, [history]);
    
    
    return ( 
        <>
       

        <div className="container" id="products">
                <div className="row" >                   
                {products.map((product) => (
                <div className="card" id="card">
                    <div key={product._id}>
                    
                        <div className="imageclass">
                            <img src={`/images/${product.product_photo}`} className="img-fluid" alt="...Loading " width="100%"/>
                            <div class="overlay">
                                <Link to = {`/product/Details/${product._id}`}>
                                <div class="text">Check {product.product_name}</div>
                                </Link>

                                 <Link to="">
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

        
     
        </>
        

     );
}
 
export default ProductsPage;