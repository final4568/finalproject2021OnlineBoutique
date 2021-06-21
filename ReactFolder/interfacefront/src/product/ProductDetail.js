
import React from "react";
import AdminHeader from "../layouts/AdminHeader";
import "../index.css";
import { useState, useEffect } from "react";
import { useRouteMatch , Link} from "react-router-dom";
import {Button } from "reactstrap";
import '../css/Product_detail.css';



const ProductDetail = ({history}) => {
    const match = useRouteMatch();
    const [product, setProduct] = useState([]);
    
    
    const getproduct = (id) =>
    fetch(`/api/product/productdetail/${id}`).then((res) => res.json());

  useEffect(() => {
    const fetchproduct = async () => {
      const product = await getproduct(match.params.id);
      setProduct(product);
    };

    fetchproduct();

  }, [history]);
    return ( 
      <>
      <AdminHeader/>

     <div class="container" style ={{marginTop:"-20px"}}>
		<div class="card">
			<div class="container-fliud">
				<div class="wrappera row">
					<div class="preview col-md-6">						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>					
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
						<p class="product-description">{product.product_description}</p>
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
						<Button href="/product/allProducttable">GO Back</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
 
      </>
     );
}
 
export default ProductDetail;