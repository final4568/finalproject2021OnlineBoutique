
import React from "react";
import Menu from "../layouts/Menu";
import "../index.css";
import { useState, useEffect } from "react";
import { useRouteMatch , Link} from "react-router-dom";
import {Button } from "reactstrap";
import '../css/Product_detail.css';
import Footer from "../layouts/Footer"


const ProductView = ({history}) => {
    const match = useRouteMatch();
    const [product, setProduct] = useState([]);
    
    
    const getproduct = (id) =>
    fetch(`/api/product/productdetail/${id}`).then((res) => res.json());

  useEffect(() => {
    const fetchproduct = async (id) => {
      const product = await getproduct(match.params.id);
      setProduct(product);
    };

    fetchproduct();

  }, [history]);
    return ( 
      <>
      <Menu/>

     <div class="container" style ={{marginTop:"-20px"}}>
		<div class="carddetailProducts">
			<div class="container-fliud">
				<div class="wrappera row">
					<div class="preview col-md-6">						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={`/images/${product.product_photo}`} /></div>					
                    	</div>				
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{product.product_name}</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description"><strong>Category: </strong>{product.product_category}</p>
						<p class="product-description">You would like the best quality products and character are what's important. Even if the script is not that strong , if I challege myself with a great. Character, I 'll go for it</p>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xxl</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xxxl</span>
						</h5>
						<h5 class="colors">colors:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span class="color green"></span>
							<span class="color blue"></span>
							<span class="color mult"></span>
							<span class="color red"></span>
							<span class="color yellow"></span>
						</h5>
						<Button href="/product">GO Back</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="container" style={{marginBottom:"50px"}}>
		<h2>Description:</h2>
		<hr/>
		<div class="rating">
		<div class="stars">
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star"></span>
			<span class="fa fa-star"></span>
		</div>
		<span class="review-no">41 reviews</span>
		</div>
		<p>
		{product.product_description}
		</p>
	</div>
	
   
        <Footer/>
      </>
     );
}
 
export default ProductView;
